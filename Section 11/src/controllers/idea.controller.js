let _ideaService = null;

class IdeaController {
    constructor({ IdeaService }) {
        _ideaService = IdeaService;
    }

    async get(req, res) {
        const { userId } = req.params;
        const idea = await _ideaService.get(userId);
        return res.send(idea);
    }

    async getAll(req, res) {
        const { pageSize, pageNumber } = req.query;
        const ideas = await _ideaService.getAll(pageSize, pageNumber);
        return res.send(ideas);
    }

    async create(req, res) {
        const { body } = req;
        const createdIdea = await _ideaService.create(body);
        return res.status(201).send(createdIdea);
    }

    async update(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const updatedIdea = await _ideaService.update(ideaId, body);
        return res.send(updatedIdea);
    }

    async delete(req, res) {
        const { ideaId } = req.params;
        const deletedIdea = await _ideaService.delete(ideaId);
        return res.send(deletedIdea);
    }

    async getUserIdeas(req, res) {
        const { userId } = req.params;
        const ideas = await _ideaService.getUserIdeas(userId);
        return res.send(ideas);
    }

    async upvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.upvoteIdea(ideaId);
        return res.send(idea);
    }

    async downvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.downvoteIdea(ideaId);
        return res.send(idea);
    }
}

module.exports = IdeaController;