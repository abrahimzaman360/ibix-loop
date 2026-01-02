export type ExamCategory = "DP-700" | "Python" | "SQL";

export interface Question {
    id: string;
    category: ExamCategory;
    questionText: string;
    scenario?: string; // For DP-700 scenario-based questions
    options: string[];
    correctOptionIndex: number;
    explanation: string;
}

export const dp700Questions: Question[] = [
    {
        id: "dp700-1",
        category: "DP-700",
        scenario: "You are a data engineer for a retail company using Microsoft Fabric. You need to ingest large volumes of point-of-sale data (approx. 5TB daily) into OneLake. The data is available in CSV format in an Azure Data Lake Storage Gen2 container.",
        questionText: "Which ingestion method should you choose to minimize latency and ensure the data is immediately available for querying in a Lakehouse?",
        options: [
            "Use a Dataflow Gen2 to transform and load the data.",
            "Use a Copy activity in a Data Pipeline to load data to the Lakehouse.",
            "Use a Shortcut to mount the ADLS Gen2 folder directly in the Lakehouse.",
            "Use a Notebook with Spark Structured Streaming."
        ],
        correctOptionIndex: 2,
        explanation: "Shortcuts allow you to reference data in OneLake without moving it. This provides zero-copy access and immediate availability for querying, which minimizes latency and storage duplication."
    },
    {
        id: "dp700-2",
        category: "DP-700",
        scenario: "Your organization requires strict data governance. You have multiple workspaces in Fabric for different departments (HR, Sales, Finance). Users in the Sales workspace need read-only access to a specific curated table in the Finance Lakehouse.",
        questionText: "What is the most secure and efficient way to grant this access without duplicating data?",
        options: [
            "Create a copy of the Finance table in the Sales Lakehouse.",
            "Share the Finance Lakehouse directly with Sales users.",
            "Create a Shortcut in the Sales Lakehouse pointing to the Finance table and grant SQL analytics endpoint SELECT permissions.",
            "Export the data to a shared CSV file."
        ],
        correctOptionIndex: 2,
        explanation: "Creating a shortcut allows cross-workspace access without duplication. Granting specific SQL permissions ensures the principle of least privilege is followed."
    },
    {
        id: "dp700-3",
        category: "DP-700",
        scenario: "You are optimizing a Spark notebook in Fabric that processes IoT telemetry. The job is running slowly due to small file problem (many small Parquet files).",
        questionText: "Which optimization technique should you apply to improve read performance for downstream consumers?",
        options: [
            "Increase the size of the Spark driver node.",
            "Run the 'OPTIMIZE' command on the Delta table.",
            "Switch from Parquet to CSV format.",
            "Partition the data by a high-cardinality column like 'Timestamp' down to the second."
        ],
        correctOptionIndex: 1,
        explanation: "The 'OPTIMIZE' command in Delta Lake compacts small files into larger ones (bin-packing), significantly improving read performance and reducing metadata overhead."
    },
    {
        id: "dp700-4",
        category: "DP-700",
        scenario: "A marketing team needs to perform ad-hoc SQL analysis on data stored in a Fabric Lakehouse. They are proficient in SQL but not Spark.",
        questionText: "Which endpoint should they connect to for their analysis?",
        options: [
            "The Lakehouse SQL Analytics Endpoint.",
            "The Spark Session endpoint.",
            "The OneLake DFS endpoint.",
            "The Azure SQL Database endpoint."
        ],
        correctOptionIndex: 0,
        explanation: "The SQL Analytics Endpoint provides a T-SQL interface over the Lakehouse data, allowing users to run SQL queries without needing to use Spark."
    },
    {
        id: "dp700-5",
        category: "DP-700",
        scenario: "You need to implement row-level security (RLS) for a report built on a Direct Lake semantic model sourced from a Fabric Warehouse.",
        questionText: "Where should you define the RLS security logic?",
        options: [
            "In the Power BI report visuals.",
            "In the Warehouse using T-SQL security predicates.",
            "In the source CSV files.",
            "In the Spark notebook used for ingestion."
        ],
        correctOptionIndex: 1,
        explanation: "For Fabric Warehouse and Direct Lake, it is best practice to define RLS in the Warehouse (using T-SQL) or the Semantic Model. Defining it in the Warehouse ensures security is consistent across all downstream tools."
    }
];

export const pythonQuestions: Question[] = [
    {
        id: "py-1",
        category: "Python",
        questionText: "What is the output of the following code? `print([x for x in range(5) if x % 2 == 0])`",
        options: [
            "[1, 3, 5]",
            "[0, 2, 4]",
            "[0, 1, 2, 3, 4]",
            "[2, 4]"
        ],
        correctOptionIndex: 1,
        explanation: "`range(5)` generates 0, 1, 2, 3, 4. The condition `x % 2 == 0` filters for even numbers: 0, 2, 4."
    },
    {
        id: "py-2",
        category: "Python",
        questionText: "Which library is the industry standard for data manipulation and analysis in Python?",
        options: [
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Requests"
        ],
        correctOptionIndex: 1,
        explanation: "Pandas is the primary library used for structured data manipulation (DataFrames) in Python data science workflows."
    },
    {
        id: "py-3",
        category: "Python",
        questionText: "How do you handle missing values in a Pandas DataFrame column `df['col']` by filling them with 0?",
        options: [
            "df['col'].replace(None, 0)",
            "df['col'].fillna(0, inplace=True)",
            "df['col'].dropna()",
            "df['col'] = 0"
        ],
        correctOptionIndex: 1,
        explanation: "`fillna(0)` is the specific method to replace NaN/None values with a specified value."
    },
    {
        id: "py-4",
        category: "Python",
        questionText: "Which of the following is NOT a mutable data type in Python?",
        options: [
            "List",
            "Dictionary",
            "Set",
            "Tuple"
        ],
        correctOptionIndex: 3,
        explanation: "Tuples are immutable sequences. Once created, their elements cannot be changed, added, or removed."
    },
    {
        id: "py-5",
        category: "Python",
        questionText: "What does the `lambda` keyword do?",
        options: [
            "Defines a class.",
            "Creates an anonymous function.",
            "Imports a module.",
            "Stops the loop."
        ],
        correctOptionIndex: 1,
        explanation: "`lambda` is used to create small, anonymous functions at runtime."
    }
];

export const sqlQuestions: Question[] = [
    {
        id: "sql-1",
        category: "SQL",
        questionText: "Which SQL clause is used to filter the results of a generic query?",
        options: [
            "GROUP BY",
            "ORDER BY",
            "WHERE",
            "HAVING"
        ],
        correctOptionIndex: 2,
        explanation: "The `WHERE` clause is used to filter records before any grouping takes place."
    },
    {
        id: "sql-2",
        category: "SQL",
        questionText: "What is the difference between `UNION` and `UNION ALL`?",
        options: [
            "They are identical.",
            "UNION removes duplicate records, while UNION ALL keeps them.",
            "UNION ALL removes duplicate records, while UNION keeps them.",
            "UNION is used for joining tables horizontally."
        ],
        correctOptionIndex: 1,
        explanation: "`UNION` performs a distinct operation on the result set, removing duplicates. `UNION ALL` simply concatenates the results, which is faster."
    },
    {
        id: "sql-3",
        category: "SQL",
        questionText: "Which window function assigns a unique rank to each row, leaving no gaps in the ranking sequence?",
        options: [
            "RANK()",
            "DENSE_RANK()",
            "ROW_NUMBER()",
            "NTILE()"
        ],
        correctOptionIndex: 2,
        explanation: "`ROW_NUMBER()` assigns a distinct sequential integer to each row. `RANK()` and `DENSE_RANK()` can assign the same rank to ties."
    },
    {
        id: "sql-4",
        category: "SQL",
        questionText: "How do you select all columns from a table named 'Customers'?",
        options: [
            "SELECT all FROM Customers",
            "SELECT * FROM Customers",
            "SELECT Customers",
            "GET Customers"
        ],
        correctOptionIndex: 1,
        explanation: "The asterisk (*) is the wildcard character in SQL that selects all columns."
    },
    {
        id: "sql-5",
        category: "SQL",
        questionText: "Which join returns all rows from the left table, and the matched rows from the right table?",
        options: [
            "INNER JOIN",
            "RIGHT JOIN",
            "LEFT JOIN",
            "FULL OUTER JOIN"
        ],
        correctOptionIndex: 2,
        explanation: "A `LEFT JOIN` (or LEFT OUTER JOIN) returns all records from the left table and the matched records from the right table. The result is NULL from the right side if there is no match."
    }
];

export const allQuestions = {
    "DP-700": dp700Questions,
    "Python": pythonQuestions,
    "SQL": sqlQuestions
};
