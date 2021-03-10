let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({
            id,
            text,
            time
        })
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {text} = req.body
        let found = messages.find(elem => elem.id === +req.params.id)
        if(found) {
            let i = messages.indexOf(found)
            let updatedMessage = {
                id: found.id,
                text: text,
                time: found.time
            }
            messages.splice(i, 1, updatedMessage)
            res.status(200).send(messages)
        } else {
            res.status(500).send(`${req.params.id} is not a valid id`)
        }
    },

    delete: (req, res) => {
        let found = messages.find(elem => elem.id === +req.params.id)
        if(found) {
            let i = messages.indexOf(found)
            messages.splice(i, 1)
            res.status(200).send(messages)
        } else {
            res.status(500).send(`${req.params.id} is not a valid id`)
        }
    }
}