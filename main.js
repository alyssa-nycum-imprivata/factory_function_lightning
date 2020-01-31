// Lightning Exercise One

const doctorFactory = (name, specialty, address) => {
    return {
        "doctor_name": name,
        "specialty": specialty,
        "office_address": address
    }
}

const dr_Kristen = doctorFactory("Dr. Kristen", "General Practitioner", "700 Woodland St");

console.log("Dr. Kristen", dr_Kristen);

// Lightning Exercise Two

const petFactory = (name, breed) => {
    return {
        "name": name,
        "breed": breed,
    }
}

const bowWowKennels = [
    petFactory("Buffy", "Golden Retriever"),
    petFactory("Kaluha", "Chocolate Lab"),
    petFactory("Ariel", "Domestic Short Haired")
];

console.log("BowWow Kennels", bowWowKennels);




