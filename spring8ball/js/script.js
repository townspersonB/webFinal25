function shake() {
    flip()
    var fortune = get_a_fortune()
    display_fortune(fortune)
}

function flip() {
    // nope
}

function get_a_fortune() {
    let list_of_fortunes = ["yes","no","Find Batu Iskender and ask him", "find Cinar and ask him","Run"]

    let random_index = randInt(list_of_fortunes.length)
    return list_of_fortunes[random_index]

}

function randInt(length) {
    let r = Math.random()
    let br = r * length
    let index = Math.floor(br)
    return index
}

function display_fortune(fortune) {
    alert(fortune)
}


