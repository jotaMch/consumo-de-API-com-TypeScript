interface Country {
    name: {
        common: string;
    };
}

export async function getFun(): Promise<void> {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonResponse = await response.json();
        
        const data = jsonResponse as Country[];
        for (let i = 0; i < 7; i++) {
            console.log(data[i].name.common);
        }
    } catch (err) {
        console.error("Erro ao buscar dados:", err);
    }
}
