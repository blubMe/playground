let greet = true

if(greet){
    let message = "Hello, "
    let message2 = "ReasonML"
    let final = message ++ message2
    print_endline(final)
} else {
    Js.log("oh god")
}
