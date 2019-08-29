export default class Note {

        constructor(init){
            this.baseNote = this._findNote(init)
        }

        get value(){
            return this.baseNote.value
        }

        get index(){
            return this.baseNote.index
        }

        _notes = [
            {
                index: 0,
                value: 'G#/Ab',
                matchers: [
                    /^G#$/i,
                    /^Ab$/i,
                ]
            },
            {
                index: 1,
                value: 'A',
                matchers: [
                    /^a$/i,
                ]
            },
            {
                index: 2,
                value: 'A#/Bb',
                matchers: [
                    /^A#$/i,
                    /^Bb$/i,
                ]
            },
            {
                index: 3,
                value: 'B',
                matchers: [
                    /^b$/i,
                ]
            },
            {
                index: 4,
                value: 'C',
                matchers: [
                    /^c$/i,
                ]
            },
            {
                index: 5,
                value: 'C#/Db',
                matchers: [
                    /^C#$/i,
                    /^Db$/i,
                ]
            },
            {
                index: 6,
                value: 'D',
                matchers: [
                    /^d$/i,
                ]
            },
            {
                index: 7,
                value: 'D#/Eb',
                matchers: [
                    /^D#$/i,
                    /^Eb$/i,
                ]
            },
            {
                index: 8,
                value: 'E',
                matchers: [
                    /^e$/i,
                ]
            },
            {
                index: 9,
                value: 'F',
                matchers: [
                    /^f$/i,
                ]
            },
            {
                index: 10,
                value: 'F#/Gb',
                matchers: [
                    /^F#$/i,
                    /^Gb$/i,
                ]
            },
            {
                index: 11,
                value: 'G',
                matchers: [
                    /^g$/i,
                ]
            }
        ]

        _findNote(value){
            return this._notes.find(({matchers}) => {
                return matchers
                    .map(matcher => matcher.test(value))
                    .some(match => match === true)
            })
        }

        equals(noteToCompare){
            return this.baseNote.index === noteToCompare.index
        }

        sharpen(steps = 1){
            let baselineSteps = this.baseNote.index + steps
            while (baselineSteps > 11){
                baselineSteps = baselineSteps - 12
            }
            const oneSharper = this._notes.find(({index}) => {
                return index === baselineSteps
            })
            this.baseNote = oneSharper
            return this
        }

        flatten(steps = 1){
            let baselineSteps = this.baseNote.index - steps
            while (baselineSteps < 0){
                baselineSteps = baselineSteps + 12
            }
            const oneFlatter = this._notes.find(({index}) => {
                return index === baselineSteps
            })

            this.baseNote = oneFlatter
            return this
        }
    
}