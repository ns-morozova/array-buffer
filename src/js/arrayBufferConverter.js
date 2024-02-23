export default class ArrayBufferConverter {
    constructor() {
        this.buffer = undefined;
    }

    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        const typeArr = new Uint16Array(this.buffer);
        return String.fromCharCode(...typeArr);
    }
}
