module.exports = {
    paths: {
        "/create": {
            get: {
                tags: {
                    Task: "Get Tasks",
                },
                description: "Get tasks",
                operationId: "getTasks",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/User",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "task created successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },
        "/id/{_id}": {  
            put: {
                tags: {
                    Tasks: "Update a task",
                },
                description: "Update task",
                operationId: "updateTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "task to be updated",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { 
                                $ref: "#/components/schemas/task" },
                        },
                    },
                },
                responses: {
                    200: { description: "task updated successfully" },
                    500: { description: "Server error" },
                },
            },
        },
    },
};
