const PROTESTIZANDO_FILE_SRC = "https://drive.google.com/file/d/1ElARBmlzf9LhCVEouHyaIolIYq7GuN6h/preview"
const A_LER_VAZIOS_FILE_SRC = "https://drive.google.com/file/d/1Z3HHdBzm0jJyX3WnOPQIwK0kFM-HUk4g/preview"

export function getFileSource(publicationId) {
    switch(publicationId) {
        case "protestizando": return PROTESTIZANDO_FILE_SRC
        case "a_ler_vazios": return A_LER_VAZIOS_FILE_SRC
        default: "NOT FOUND"
    }
}
