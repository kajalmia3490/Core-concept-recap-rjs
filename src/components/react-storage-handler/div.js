import add from "./add"
import multi from "./multi"
import sub from "./sub"

const div = () => {
    const sum = add(2, 4) + sub(5, 3) + multi(2, 2)
    return sum / 5
}

const mod = () => {
     return div() % 5
}

export {div, mod};