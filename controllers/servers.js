let servers = [
    { id: '1', name: 'AWS', status: 'working' },
    { id: '2', name: 'Google Cloud', status: 'working' },
    { id: '3', name: 'Yandex Cloud', status: 'working' },
    { id: '4', name: 'Microsoft', status: 'pending' }
]; 

export const getAll = (req, res) => {
    res.status(200).json(servers);
};

export const create = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    };

    servers.push(newServer);
    res.status(201).json(newServer);
};

export const remove = (req, res) => {
    console.log('ID', req.params.id);
    servers = servers.filter(server => server.id !== req.params.id);
    res.json({
        message: 'Server has been removed.'
    });
};