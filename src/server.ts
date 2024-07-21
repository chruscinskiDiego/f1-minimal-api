import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify();

server.register(cors, {
    origin: "*", //isso faz com que qualquer endereco possa consumir a api
    methods: "GET",
});

const PORT = 3333;

interface DriverParams {
    id:string;
}

interface TeamParams {
    id: string;
}

const teams = [
    {
        id: 1,
        name: "Ferrari",
        base: "Maranello, Italy"
    },
    {
        id: 2,
        name: "McLaren",
        base: "Woking, United Kingdom"
    },
    {
        id: 3,
        name: "Red Bull",
        base: "Milton Keynes, United Kingdom"
    },
    {
        id: 4,
        name: "Renault",
        base: "Enstone, United Kingdom"
    },
    {
        id: 5,
        name: "Mercedes",
        base: "Brackley, United Kingdom"
    },
    {
        id: 6,
        name: "Williams",
        base: "Grove, United Kingdom"
    },
    {
        id: 7,
        name: "Alfa Romeo",
        base: "Hinwil, Switzerland"
    },
    {
        id: 8,
        name: "Haas",
        base: "Kannapolis, United States"
    },
    {
        id: 9,
        name: "Aston Martin",
        base: "Silverstone, United Kingdom"
    },
    {
        id: 10,
        name: "AlphaTauri",
        base: "Faenza, Italy"
    }
];

const drivers = [
    {
        id: 1,
        name: "Rubens Barrichello",
        team: "Ferrari"
    },
    {
        id: 2,
        name: "Lewis Hamilton",
        team: "Ferrari"
    },
    {
        id: 3,
        name: "Michael Schumacher",
        team: "Ferrari"
    },
    {
        id: 4,
        name: "Ayrton Senna",
        team: "McLaren"
    },
    {
        id: 5,
        name: "Sebastian Vettel",
        team: "Red Bull"
    },
    {
        id: 6,
        name: "Fernando Alonso",
        team: "Renault"
    },
    {
        id: 7,
        name: "Niki Lauda",
        team: "Ferrari"
    },
    {
        id: 8,
        name: "Max Verstappen",
        team: "Red Bull"
    },
    {
        id: 9,
        name: "Kimi Räikkönen",
        team: "Ferrari"
    },
    {
        id: 10,
        name: "Jenson Button",
        team: "Brawn GP"
    }
];


server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);

    return {teams};

});

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);

    return {drivers};
});

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find( d => d.id === id);

    if(!driver){
        response.type("application/json").code(404);

        return {message: "Driver NOT found! :/"}
    }
    else{
        response.type("application/json").code(200);

        return driver;
    }
})

server.get<{Params: TeamParams}>("/teams/:id", async (request, response)  => {
    const id = parseInt(request.params.id);
    const team = teams.find( t => t.id === id);

    if(!team){
        response.type("application/json").code(404);

        return {message: "Team NOT found! :/"}
    }
    else{
        response.type("application/json").code(200);

        return team;
    }
})

server.listen({port:PORT}, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});