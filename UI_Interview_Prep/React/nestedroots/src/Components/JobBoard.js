import { useState, useEffect } from "react";

const PAGE_SIZE = 6;

export default function App() {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((res) => res.json())
      .then((ids) => setJobIds(ids));
  }, []);

  useEffect(() => {
    const ids = jobIds.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    const promises = ids.map((id) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
        (res) => res.json(),
      ),
    );
    Promise.all(promises).then((newJobs) =>
      setJobs((prev) => [...prev, ...newJobs]),
    );
  }, [jobIds, page]);

  const loadMore = () => setPage((p) => p + 1);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <>{job.title}</>
          <>{job.by}</>
          <>{job.url ? <a href={job.url} target="_blank">{job.title}</a> : job.title}</>
          <>{new Date(job.time * 1000).toLocaleDateString()}</>
        </div>
      ))}
      {jobs.length < jobIds.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
}
