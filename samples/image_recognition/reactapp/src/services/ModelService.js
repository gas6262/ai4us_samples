import { postRaw } from "./ServiceHelperMethods";


class ModelService {

    static async inferImage(modelId, imageData) {

        var fd = new FormData();
        fd.append('file', imageData, 'file.jpg');

        const modelIdentifiers = `model=${modelId}`
        return await postRaw(`ImageClassifier?${modelIdentifiers}`, fd, process.env.REACT_APP_MODEL_TEST_API);

    }
}



export default ModelService;