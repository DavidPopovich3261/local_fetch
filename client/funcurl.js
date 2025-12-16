import input from "analiza-sync";

export async function get(name, lang) {
    try {
        const res = await fetch(`http://localhost:3000/greet?name=${name}&lang=${lang}`)
        const data = await res.json()
        console.log(data);

    } catch (error) {
        console.error(error);
    }

}
export async function post(numbers) {
    try {
        const res = await fetch("http://localhost:3000/math/average", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ "numbers": numbers })
        })
        const data = await res.json()
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

export async function put(word) {
    try {
        const res = await fetch(`http://localhost:3000/shout/${word}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "put",
        })
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

export async function delete_demo(x_role) {
    try {
        const res = await fetch("http://localhost:3000/secure/resource",
            {
                method: "delete",
                headers: {
                    'Content-Type': 'application/json',
                    "x-role": x_role
                }
            })
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}

export async function all() {
    let name = input("name\n")
    let lang = input("lang\n")
    let numbers = input("numbers\n")
    numbers = numbers.split(" ")
    let ward = input("ward\n")
    let x_role = input("user\n")
    Promise.all([
        await get(name, lang),
        await post(numbers),
        await put(ward),
        await delete_demo(x_role)
    ])

}
export async function chaining() {
    let name = input("name\n")
    let lang = input("lang\n")
    let numbers = input("numbers\n")
    numbers = numbers.split(" ")
    let ward = input("ward\n")
    let x_role = input("user\n")
    
        await get(name, lang).
        then(()=>{return post(numbers)}).
        then(()=>{return put(ward)}).
        then(()=>{return delete_demo(x_role)})
       
        
    

}
