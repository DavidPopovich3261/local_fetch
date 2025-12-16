import { get,post,put,delete_demo,all,chaining} from "./funcurl.js";
import input from "analiza-sync"

let flag = true
while(flag){
    let caches = input(`1. Generate a greeting\n2. Calculate the average\n3. Transform a word\n4. Delete a protected\n5. Call each server endpoint one after the other (in sequence)\n6. Call all server endpoints in parallel\n7. Exit\n`)
    switch (caches) {
        case "1":
            let name = input("name\n")
            let lang = input("lang\n")
            await get(name,lang)
            break;

        case "2":
            let numbers = input ("numbers\n")
            numbers = numbers.split(" ")
            await post(numbers)
            break;

        case "3":
            let ward = input("ward\n")
            await put(ward)
            break;

        case "4":
            let x_role = input("user\n")
            await delete_demo(x_role)
            break;

        case "5":
            await chaining()
            break;

        case "6":
            await all()
            break;

        case "7":
            flag = false
            break;
    }
    
}