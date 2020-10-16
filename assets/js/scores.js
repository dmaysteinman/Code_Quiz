const arr = [{initials: 'JC', score: 100},{initials: 'BC', score: 99},{initials: 'GD', score: 98},{initials: 'STN', score: 97},]

//stole this from office hours
arr.sort(function(current, next) {
    if (current.score > next.score) {
        return -1
    } else if (current.score < next.score) {
        return 1
    }
    return 0
})