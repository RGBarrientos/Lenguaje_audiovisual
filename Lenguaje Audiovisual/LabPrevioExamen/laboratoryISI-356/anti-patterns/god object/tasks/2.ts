class Flight {
    constructor(public flightID: string) {}
}
class Passenger {
    constructor(){}
}
class Crew {
    constructor(){}
}
class planesMaintenance {
    constructor(){}
}
class financialRecord {
    constructor(){}
}

class AirportSystem {
    flights: Flight[] = [];
    passengers: Passenger[] = [];
    crews: Crew[] = [];
    planesMaintenance: planesMaintenance[] = [];
    financialRecords: financialRecord[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: Flight) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: Crew, flightID: string) {
        this.crews.push({...crew, flightID});
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: planesMaintenance) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: financialRecord) {
        this.financialRecords.push(transaction);
    }
}


/*class AirportSystem {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({...crew, flightID});
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}*/
