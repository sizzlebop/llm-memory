import Memory from "../../dist/index.js";

const main = async () => {
    const config = {
        historyDbPath: "",
        llm: {
            provider: "ollama",
            config: {
                model: "llama3.1",
            },
        },
        collectionName: "demo_collection-ollama",
        vectorStore: {
            provider: "qdrant",
            config: {
                url: "http://127.0.0.1:6333",
            },
        },
        embedder: {
            provider: "ollama",
            config: {
                model: "nomic-embed-text",
            },
        },
    };

    const m = new Memory(config);
    await m.initialize();
    await m.add("my name is Jamie, I am a fullstack engineer");

    const searchResult = await m.search("name");

    console.log(searchResult);
};

main();
