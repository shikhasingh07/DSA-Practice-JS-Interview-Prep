import {useState} from 'react'

const useCycle = (...args) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex(prev => (prev + 1) % args.length);
  return [args[index], next];
}

export default useCycle