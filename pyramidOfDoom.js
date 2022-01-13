/* This piece of code  is for A1 refactor without callbacks*/

var PlayerService = {
    getPlayerTeamId: playerId => {
        return fetch(`/player/${playerId}/team`);
    },

    getPlayers: teamId => {
        return fetch(`/team/${teamId}/player`);
    }
}

var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: () => {
        PlayerService.getPlayerTeamId(this.playerId)
            .then(responseTeam => responseTeam.json())
            .then(team => PlayerService.getPlayers(team.id))
            .then(responsePlayers => responsePlayers.json())
            .then(playerList => {
                // Render playerList
            })
            .catch(error => console.log("There was an error.", error));
    }
};

PlayerDetailsController.showTeammatesClick();

/* This piece of code  is for A2 refactor without callbacks and use Async Await*/

var PlayerService = {
    getPlayerTeamId: playerId => {
        return fetch(`/player/${playerId}/team`);
    },

    getPlayers: teamId => {
        return fetch(`/team/${teamId}/player`);
    }
}

var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: async () => {
        try {
            let responseTeam = await PlayerService.getPlayerTeamId(this.playerId);
            let teamId = responseTeam.json();
            let responsePlayers = await PlayerService.getPlayers(teamId.id);
            let playerList = responsePlayers.json();
            // Render playerList
        } catch (e) {
            console.log("There was an error.", e);
        }
    }
};

PlayerDetailsController.showTeammatesClick();
