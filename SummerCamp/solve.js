class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        let participantName = this.listOfParticipants.find(p => p.name == name)

        if (participantName) {
            return `The ${name} is already registered at the camp.`
        } else {
            for (let [key, value] of Object.entries(this.priceForTheCamp)) {
                if (key == condition) {
                    if (value > money) {
                        return `The money is not enough to pay the stay at the camp.`
                    } else {
                        this.listOfParticipants.push({
                            name: name,
                            condition: condition,
                            power: 100,
                            wins: 0
                        })
                        return `The ${name} was successfully registered.`
                    }
                }
            }
            throw new Error("Unsuccessful registration at the camp.")
        }

    }

    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(p => p.name == name)
        if (participant == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants.filter(p => p.name != name)
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(p => p.name == participant1)


        if (!player1) {
            throw new Error(`Invalid entered name/s.`)
        }
        if (participant1 && participant2) {
            let player2 = this.listOfParticipants.find(p => p.name == participant2)
            if (!player2) {
                throw new Error(`Invalid entered name/s.`)
            }
            if (player1.condition != player2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }
            if (typeOfGame == 'WaterBalloonFights') {
                if (player1.power > player2.power) {
                    player1.wins++
                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                } else if (player2.power > player1.power) {
                    player2.wins++
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                } else {
                    return `There is no winner.`
                }
            }
        }
        else if (typeOfGame == 'Battleship') {
            player1.power += 20
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        let result = []
        let firstLine = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`]
        result.push(firstLine)
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        let secondLine = this.listOfParticipants.map(p => [`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`]).join('\n')
        result.push(secondLine)
        return result.join('\n')

    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
