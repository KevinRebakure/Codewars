function print(name) {
    setTimeout(() => {
        name()
    }, 3000);
}

function message() {
    console.log('Hello World!')
}

print(message)