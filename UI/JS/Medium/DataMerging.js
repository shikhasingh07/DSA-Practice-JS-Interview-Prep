function mergeData(sessions) {
    let map = new Map();

    let order = [];

    sessions.forEach(session => {
        if (!map.has(session.user)) {
            order.push(session.user);
            map.set(session.user, { ...session, equipment: [...session.equipment] })
        } else {
            const existing = map.get(session.user);
            existing.duration += session.duration;
            existing.equipment = [...new Set([...existing.equipment, ...session.equipment])].sort();
        }
    })
    return order.map(user => map.get(user));
}