import Note from './note'

describe('Note', function (){
    describe('creates full notes', () => {

        test('creates note A', () => {
            const A = new Note('A');
            expect(A.value).toBe('A')
        })
        
        test('creates note B', () => {
            const B = new Note('B');
            expect(B.value).toBe('B')
        })
        
        test('creates note C', () => {
            const C = new Note('C');
            expect(C.value).toBe('C')
        })
        
        test('creates note D', () => {
            const D = new Note('D');
            expect(D.value).toBe('D')
        })
        
        test('creates note E', () => {
            const E = new Note('E');
            expect(E.value).toBe('E')
        })
        
        test('creates note F', () => {
            const F = new Note('F');
            expect(F.value).toBe('F')
        })
        
        test('creates note G', () => {
            const G = new Note('G');
            expect(G.value).toBe('G')
        })
        
    })

    describe('creates sharps and flats', function() {

        test('creates G sharp/ A flat', () => {
            const gSharp = new Note('G#')
            const aFlat = new Note('Ab')
            expect(gSharp.equals(aFlat)).toBe(true)
            expect(gSharp.value).toEqual(aFlat.value)
        })
        test('creates A sharp/ B flat', () => {
            const aSharp = new Note('A#')
            const bFlat = new Note('Bb')
            expect(aSharp.equals(bFlat)).toBe(true)
            expect(aSharp.value).toEqual(bFlat.value)
        })
        test('creates C sharp/ D flat', () => {
            const cSharp = new Note('C#')
            const dFlat = new Note('Db')
            expect(cSharp.equals(dFlat)).toBe(true)
            expect(cSharp.value).toEqual(dFlat.value)
        })
        test('creates D sharp/ E flat', () => {
            const dSharp = new Note('D#')
            const eFlat = new Note('Eb')
            expect(dSharp.equals(eFlat)).toBe(true)
            expect(dSharp.value).toEqual(eFlat.value)
        })
        test('creates F sharp/ G flat', () => {
            const fSharp = new Note('F#')
            const gFlat = new Note('Gb')
            expect(fSharp.equals(gFlat)).toBe(true)
            expect(fSharp.value).toEqual(gFlat.value)
        })

    })
    
    test('sharpen raises the note a half step', () => {
        const a = new Note('A')
        const aSharp = a.sharpen()
        const expected = new Note('A#')
        expect(aSharp.value).toBe('A#/Bb')
        expect(aSharp.equals(expected)).toBe(true)
    })

    test('given an argument, sharpen raises the note the provided half steps', () => {
        const a = new Note('A')
        const b = a.sharpen(2)
        const expected = new Note('B')
        expect(b.value).toBe('B')
        expect(b.equals(expected)).toBe(true)
    })

    test('sharpen can be chained', () => {
        const b = new Note('A').sharpen().sharpen()
        const expected = new Note('b')
        expect(b.value).toBe('B')
        expect(b.equals(expected)).toBe(true)
    })

    test('flatten lowers the note a half step', () => {
        const fSharp = new Note('F#')
        const f = fSharp.flatten()
        const expected = new Note('F')
        expect(f.value).toBe('F')
        expect(f.equals(expected)).toBe(true)
    })

    test('given an argument, flatten lowers the note the provided half steps', () => {
        const a = new Note('A')
        const b = a.sharpen(2)
        const expected = new Note('B')
        expect(b.value).toBe('B')
        expect(b.equals(expected)).toBe(true)
    })

    test('flatten can be chained', () => {
        const a = new Note('B').flatten().flatten()
        const expected = new Note('a')
        expect(a.value).toBe('A')
        expect(a.equals(expected)).toBe(true)
    })

    describe('edge cases', function() {
        test('moving up an octave', () => {
            const gSharp = new Note('G').sharpen()
            const expected = new Note('G#')
            // expect(gSharp).toBe(true)
            expect(gSharp.equals(expected)).toBe(true)
        })
        test('moving up a lot of octaves in a chain', () => {
            const a = new Note('A')
            const expected = new Note('A')
            // iterate through a dozen octaves
            for (let i = 0; i <= 143; i++){
                a.sharpen()
            }
            expect(a.equals(expected)).toBe(true)
        })
        test('moving up a lot of octaves in one call', () => {
            const a = new Note('A')
            const b = a.sharpen(146)
            const expected = new Note('B')
            expect(b.value).toBe('B')
            expect(b.equals(expected)).toBe(true)
        })
        test('moving down an octave', () => {
            const gSharp = new Note('G#').flatten()
            const expected = new Note('G')
            expect(gSharp.equals(expected)).toBe(true)
        })
        test('moving down a lot of octaves in a chain', () => {
            const a = new Note('A')
            const otherA = new Note('A')
            // iterate through a dozen octaves
            for (let i = 0; i <= 143; i++){
                otherA.flatten()
            }
            expect(a.equals(otherA)).toBe(true)
        })
        test('moving down a lot of octaves in one call', () => {
            const b = new Note('B')
            const a = b.flatten(146)
            const expected = new Note('A')
            expect(a.value).toBe('A')
            expect(a.equals(expected)).toBe(true)
        })
    })
})