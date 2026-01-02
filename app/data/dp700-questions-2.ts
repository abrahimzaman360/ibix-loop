import { Question } from "./exam-questions";

export const dp700QuestionsSet2: Question[] = [
    {
        id: "dp700-51",
        category: "DP-700",
        scenario: "You are setting up a new Fabric workspace for a financial analytics project.",
        questionText: "Which license is required to create and publish content in a Fabric workspace?",
        options: ["Fabric Free", "Power BI Pro", "Fabric Capacity or Premium Per User", "Azure subscription only"],
        correctOptionIndex: 2,
        explanation: "Creating Fabric items requires Fabric capacity or PPU license."
    },
    {
        id: "dp700-52",
        category: "DP-700",
        scenario: "Your data team needs to write PySpark code in Fabric notebooks.",
        questionText: "Which programming languages are supported in Fabric Spark notebooks?",
        options: ["PySpark only", "PySpark, Scala, SparkSQL, and R", "Python only", "Java and Scala only"],
        correctOptionIndex: 1,
        explanation: "Fabric notebooks support PySpark, Scala, SparkSQL, and R."
    },
    {
        id: "dp700-53",
        category: "DP-700",
        scenario: "You need to implement a lookup table that changes infrequently in your Spark job.",
        questionText: "Which optimization should you use for joining this table?",
        options: ["Broadcast join", "Sort-merge join", "Shuffle hash join", "Nested loop join"],
        correctOptionIndex: 0,
        explanation: "Broadcast joins are efficient for small lookup tables."
    },
    {
        id: "dp700-54",
        category: "DP-700",
        scenario: "Your report users need to see data refreshed every 5 minutes.",
        questionText: "Which semantic model mode best supports this requirement?",
        options: ["Import with scheduled refresh", "Direct Lake", "DirectQuery", "Dual mode"],
        correctOptionIndex: 1,
        explanation: "Direct Lake provides near-real-time access without full import refresh cycles."
    },
    {
        id: "dp700-55",
        category: "DP-700",
        scenario: "You need to implement partitioning for a Delta table containing 5 years of sales data.",
        questionText: "Which partitioning strategy is most appropriate?",
        options: ["Partition by year and month", "Partition by customer ID", "Partition by product SKU", "No partitioning"],
        correctOptionIndex: 0,
        explanation: "Date-based partitioning aligns with typical query patterns and provides good pruning."
    },
    {
        id: "dp700-56",
        category: "DP-700",
        scenario: "Your Warehouse needs to support queries from both Power BI and third-party BI tools.",
        questionText: "Which connection method should third-party tools use?",
        options: ["JDBC/ODBC via SQL connection string", "REST API only", "Power Query only", "Spark connector only"],
        correctOptionIndex: 0,
        explanation: "Fabric Warehouse supports standard JDBC/ODBC connections."
    },
    {
        id: "dp700-57",
        category: "DP-700",
        scenario: "You need to capture metadata about your data assets for governance purposes.",
        questionText: "Which service should you integrate with Fabric?",
        options: ["Microsoft Purview", "Azure Data Catalog (classic)", "SharePoint", "Teams"],
        correctOptionIndex: 0,
        explanation: "Microsoft Purview provides data governance and cataloging for Fabric."
    },
    {
        id: "dp700-58",
        category: "DP-700",
        scenario: "Your pipeline needs to wait for a specific condition before proceeding.",
        questionText: "Which activity should you use?",
        options: ["Until activity", "ForEach activity", "Wait activity", "Lookup activity"],
        correctOptionIndex: 0,
        explanation: "Until activity loops until a specified condition becomes true."
    },
    {
        id: "dp700-59",
        category: "DP-700",
        scenario: "You need to implement data quality rules that block bad data from entering production.",
        questionText: "Where should you implement data quality gates?",
        options: ["In the ingestion pipeline with validation logic", "After data reaches production", "In Power BI reports", "Manual review only"],
        correctOptionIndex: 0,
        explanation: "Quality gates in pipelines prevent bad data from propagating downstream."
    },
    {
        id: "dp700-60",
        category: "DP-700",
        scenario: "Your Spark notebook needs to access data from multiple Lakehouses.",
        questionText: "How can you reference tables from different Lakehouses?",
        options: ["Use fully qualified three-part names", "Create shortcuts only", "Copy data locally", "This is not possible"],
        correctOptionIndex: 0,
        explanation: "Three-part naming (workspace.lakehouse.table) allows cross-Lakehouse access."
    },
    {
        id: "dp700-61",
        category: "DP-700",
        scenario: "You need to implement rate limiting for API calls in your Data Pipeline.",
        questionText: "Which approach should you use?",
        options: ["Configure retry policy with exponential backoff", "Remove rate limiting", "Increase parallelism", "Use webhooks instead"],
        correctOptionIndex: 0,
        explanation: "Retry policies with backoff help handle rate-limited API responses."
    },
    {
        id: "dp700-62",
        category: "DP-700",
        scenario: "Your Delta table has data skew causing some Spark tasks to take much longer.",
        questionText: "Which optimization can help address this?",
        options: ["Salting the partition key", "Removing partitioning", "Increasing driver memory", "Decreasing parallelism"],
        correctOptionIndex: 0,
        explanation: "Salting distributes skewed keys across multiple partitions."
    },
    {
        id: "dp700-63",
        category: "DP-700",
        scenario: "You need to implement a data retention policy in your Lakehouse.",
        questionText: "Which approach should you use for Delta tables?",
        options: ["VACUUM with appropriate retention period", "Manual file deletion", "Table truncation", "Partition dropping only"],
        correctOptionIndex: 0,
        explanation: "VACUUM removes files older than the retention period while preserving current version."
    },
    {
        id: "dp700-64",
        category: "DP-700",
        scenario: "Your semantic model needs to combine data from both Lakehouse and external APIs.",
        questionText: "Which approach allows this combination?",
        options: ["Composite model with multiple data sources", "Single Direct Lake model", "Import only", "DirectQuery only"],
        correctOptionIndex: 0,
        explanation: "Composite models can combine multiple data source types."
    },
    {
        id: "dp700-65",
        category: "DP-700",
        scenario: "You need to optimize file sizes for Parquet files in your Lakehouse.",
        questionText: "What is the recommended target file size?",
        options: ["128MB - 1GB", "1MB - 10MB", "10GB+", "Under 1MB"],
        correctOptionIndex: 0,
        explanation: "Files between 128MB and 1GB provide good balance of parallelism and overhead."
    },
    {
        id: "dp700-66",
        category: "DP-700",
        scenario: "Your organization requires that sensitive data never leaves a specific region.",
        questionText: "Which configuration ensures data residency?",
        options: ["Select appropriate capacity region", "Use encryption only", "VNet isolation", "Private endpoints"],
        correctOptionIndex: 0,
        explanation: "Capacity region determines where data is stored and processed."
    },
    {
        id: "dp700-67",
        category: "DP-700",
        scenario: "You need to implement real-time aggregations on streaming data.",
        questionText: "Which Fabric component is best suited for this?",
        options: ["KQL Database with Eventstream", "Warehouse", "Lakehouse batch processing", "Power BI streaming datasets"],
        correctOptionIndex: 0,
        explanation: "KQL Database excels at real-time analytics on streaming data."
    },
    {
        id: "dp700-68",
        category: "DP-700",
        scenario: "Your pipeline needs to send email notifications on failure.",
        questionText: "Which activity should you use?",
        options: ["Office 365 Outlook activity or Web activity", "Script activity", "Copy activity", "Lookup activity"],
        correctOptionIndex: 0,
        explanation: "Web activities can call notification services; some connectors support email directly."
    },
    {
        id: "dp700-69",
        category: "DP-700",
        scenario: "You need to implement column-level security in your semantic model.",
        questionText: "Where should you define column visibility rules?",
        options: ["In the semantic model using perspectives or RLS", "In source Lakehouse", "In Power BI reports only", "Cannot be implemented"],
        correctOptionIndex: 0,
        explanation: "Semantic models support column-level security through various mechanisms."
    },
    {
        id: "dp700-70",
        category: "DP-700",
        scenario: "Your Spark job keeps spilling data to disk during shuffles.",
        questionText: "Which action might help reduce spilling?",
        options: ["Increase executor memory", "Decrease partition count", "Use smaller node types", "Disable caching"],
        correctOptionIndex: 0,
        explanation: "More memory reduces the need to spill shuffle data to disk."
    },
    {
        id: "dp700-71",
        category: "DP-700",
        scenario: "You need to implement query folding in Dataflow Gen2 for optimal performance.",
        questionText: "Which transformation types support query folding?",
        options: ["Filter, Sort, Column selection on supported sources", "All transformations", "Custom functions only", "None support folding"],
        correctOptionIndex: 0,
        explanation: "Basic transformations like filter and select typically support query folding."
    },
    {
        id: "dp700-72",
        category: "DP-700",
        scenario: "Your team needs to test pipeline changes before deploying to production.",
        questionText: "Which approach should you use?",
        options: ["Deployment pipelines with dev/test/prod stages", "Direct production changes", "Manual testing only", "Separate subscriptions"],
        correctOptionIndex: 0,
        explanation: "Deployment pipelines provide structured promotion across environments."
    },
    {
        id: "dp700-73",
        category: "DP-700",
        scenario: "You need to implement a Type 1 SCD where history is not tracked.",
        questionText: "Which SQL operation is most appropriate?",
        options: ["MERGE with UPDATE for matches", "INSERT only", "TRUNCATE and reload", "Append only"],
        correctOptionIndex: 0,
        explanation: "MERGE with UPDATE overwrites existing records without preserving history."
    },
    {
        id: "dp700-74",
        category: "DP-700",
        scenario: "Your Lakehouse files are stored in multiple formats (Parquet, CSV, JSON).",
        questionText: "Which format provides best query performance for analytics?",
        options: ["Parquet (preferably Delta)", "CSV", "JSON", "All perform equally"],
        correctOptionIndex: 0,
        explanation: "Parquet/Delta provides columnar storage and compression for analytics."
    },
    {
        id: "dp700-75",
        category: "DP-700",
        scenario: "You need to implement table cloning for development purposes.",
        questionText: "Which Delta Lake feature provides this with minimal storage?",
        options: ["Shallow clone", "Deep clone", "Table copy", "CTAS"],
        correctOptionIndex: 0,
        explanation: "Shallow clone references source data files without copying."
    },
    {
        id: "dp700-76",
        category: "DP-700",
        scenario: "Your pipeline needs to dynamically construct SQL queries based on parameters.",
        questionText: "Which expression feature should you use?",
        options: ["String interpolation with @concat or @concat()", "Hardcoded queries", "Separate activities per query", "Lookup activity only"],
        correctOptionIndex: 0,
        explanation: "Expression functions like concat enable dynamic query construction."
    },
    {
        id: "dp700-77",
        category: "DP-700",
        scenario: "You need to implement data deduplication during the ingestion process.",
        questionText: "Which approach is most efficient?",
        options: ["Use MERGE with deduplication logic", "Post-load deduplication only", "Manual review", "Accept duplicates"],
        correctOptionIndex: 0,
        explanation: "MERGE can deduplicate during the load process efficiently."
    },
    {
        id: "dp700-78",
        category: "DP-700",
        scenario: "Your semantic model performance is degraded with many calculated columns.",
        questionText: "What optimization should you consider?",
        options: ["Move calculations to source or Lakehouse", "Add more calculated columns", "Increase refresh frequency", "Remove indexes"],
        correctOptionIndex: 0,
        explanation: "Pre-computing calculations in the data layer improves model performance."
    },
    {
        id: "dp700-79",
        category: "DP-700",
        scenario: "You need to implement data archival for compliance with 7-year retention.",
        questionText: "Which approach should you use?",
        options: ["Archive to cold storage with appropriate lifecycle", "Keep in hot Lakehouse", "Delete after processing", "Manual backups"],
        correctOptionIndex: 0,
        explanation: "Tiered storage with lifecycle policies balances cost and compliance."
    },
    {
        id: "dp700-80",
        category: "DP-700",
        scenario: "Your Warehouse needs to support concurrent queries from hundreds of users.",
        questionText: "Which factor most affects concurrency?",
        options: ["Capacity size and configuration", "Table design only", "Index types", "Column names"],
        correctOptionIndex: 0,
        explanation: "Capacity resources determine the workload the Warehouse can handle."
    },
    {
        id: "dp700-81",
        category: "DP-700",
        scenario: "You need to implement schema validation for incoming JSON data.",
        questionText: "Where should you implement this validation?",
        options: ["During ingestion in Spark notebook or pipeline", "After data is loaded", "In Power BI", "Manual review"],
        correctOptionIndex: 0,
        explanation: "Schema validation during ingestion prevents bad data from entering the system."
    },
    {
        id: "dp700-82",
        category: "DP-700",
        scenario: "Your team needs to understand the impact of changes to upstream tables.",
        questionText: "Which feature helps analyze data dependencies?",
        options: ["Lineage view in Purview or Fabric", "Manual documentation", "Query logs only", "Trial and error"],
        correctOptionIndex: 0,
        explanation: "Lineage views show upstream and downstream dependencies."
    },
    {
        id: "dp700-83",
        category: "DP-700",
        scenario: "You need to implement a surrogate key for your dimension table.",
        questionText: "Which approach is most common?",
        options: ["Identity column or monotonically increasing ID", "Use business key", "Random UUID only", "No key needed"],
        correctOptionIndex: 0,
        explanation: "Surrogate keys are typically sequential integers for performance."
    },
    {
        id: "dp700-84",
        category: "DP-700",
        scenario: "Your Dataflow Gen2 needs to connect to an on-premises Oracle database.",
        questionText: "Which component is required?",
        options: ["On-premises data gateway", "Direct cloud connection", "VPN only", "Express Route only"],
        correctOptionIndex: 0,
        explanation: "Data gateway bridges on-premises data sources to cloud services."
    },
    {
        id: "dp700-85",
        category: "DP-700",
        scenario: "You need to implement write-ahead logging for your critical data pipeline.",
        questionText: "Which Delta Lake feature provides this capability?",
        options: ["Transaction log", "Checkpoints", "Z-ORDER", "Vacuum"],
        correctOptionIndex: 0,
        explanation: "Delta Lake transaction log ensures ACID compliance and recoverability."
    },
    {
        id: "dp700-86",
        category: "DP-700",
        scenario: "Your Spark job processes semi-structured JSON with varying schemas.",
        questionText: "Which approach handles schema flexibility best?",
        options: ["explode and lateral view for nested structures", "Fixed schema enforcement", "String processing", "Ignore nested data"],
        correctOptionIndex: 0,
        explanation: "Spark functions like explode handle nested and varying JSON structures."
    },
    {
        id: "dp700-87",
        category: "DP-700",
        scenario: "You need to implement data contracts between producer and consumer teams.",
        questionText: "What should data contracts define?",
        options: ["Schema, SLAs, data quality expectations", "Only column names", "File formats only", "Nothing formal"],
        correctOptionIndex: 0,
        explanation: "Data contracts formalize expectations between data producers and consumers."
    },
    {
        id: "dp700-88",
        category: "DP-700",
        scenario: "Your semantic model needs different calculation logic for different user groups.",
        questionText: "Which feature enables this behavior?",
        options: ["Calculation groups or conditional DAX", "Single measure only", "Separate models per group", "Report-level filters"],
        correctOptionIndex: 0,
        explanation: "Calculation groups and conditional logic enable dynamic calculations."
    },
    {
        id: "dp700-89",
        category: "DP-700",
        scenario: "You need to implement auto-scaling for your Spark jobs.",
        questionText: "How does Fabric handle Spark compute scaling?",
        options: ["Automatically based on workload", "Manual configuration only", "Fixed cluster size", "External orchestration required"],
        correctOptionIndex: 0,
        explanation: "Fabric Spark pools can auto-scale based on job requirements."
    },
    {
        id: "dp700-90",
        category: "DP-700",
        scenario: "Your data pipeline needs to handle late-arriving data.",
        questionText: "Which approach should you implement?",
        options: ["Watermark with allowable delay window", "Reject late data", "Process in batch only", "Real-time only"],
        correctOptionIndex: 0,
        explanation: "Watermarking with delay windows handles late data gracefully."
    },
    {
        id: "dp700-91",
        category: "DP-700",
        scenario: "You need to optimize join performance between a 1TB fact table and 10MB dimension.",
        questionText: "Which join strategy is most efficient?",
        options: ["Broadcast the dimension table", "Shuffle both tables", "Sort-merge join", "Nested loop"],
        correctOptionIndex: 0,
        explanation: "Broadcasting the small dimension avoids expensive shuffles."
    },
    {
        id: "dp700-92",
        category: "DP-700",
        scenario: "Your pipeline needs to process files in a specific order.",
        questionText: "Which approach ensures ordered processing?",
        options: ["Sorted file list with sequential processing", "Parallel processing", "Random order", "Timestamp-based only"],
        correctOptionIndex: 0,
        explanation: "Sorting the file list and processing sequentially ensures order."
    },
    {
        id: "dp700-93",
        category: "DP-700",
        scenario: "You need to implement slowly-changing dimension Type 6 (Hybrid).",
        questionText: "What characterizes Type 6?",
        options: ["Combination of Type 1, 2, and 3 techniques", "No history tracking", "Full history only", "Current values only"],
        correctOptionIndex: 0,
        explanation: "Type 6 combines overwrite, history, and current value columns."
    },
    {
        id: "dp700-94",
        category: "DP-700",
        scenario: "Your Warehouse tables are growing rapidly and costs are increasing.",
        questionText: "Which optimization reduces storage costs?",
        options: ["Implement data lifecycle policies and archival", "Add more indexes", "Increase capacity", "Replicate data"],
        correctOptionIndex: 0,
        explanation: "Lifecycle policies move or delete old data to control costs."
    },
    {
        id: "dp700-95",
        category: "DP-700",
        scenario: "You need to implement data sampling for development and testing.",
        questionText: "Which Spark function helps with this?",
        options: ["sample() or TABLESAMPLE", "Full data copies", "Manual selection", "Random queries"],
        correctOptionIndex: 0,
        explanation: "sample() provides statistical sampling for development datasets."
    },
    {
        id: "dp700-96",
        category: "DP-700",
        scenario: "Your pipeline needs to handle exactly-once semantics for critical data.",
        questionText: "Which approach ensures this?",
        options: ["Idempotent operations with checkpointing", "At-least-once delivery", "At-most-once delivery", "No guarantees"],
        correctOptionIndex: 0,
        explanation: "Idempotent operations with checkpointing achieve exactly-once processing."
    },
    {
        id: "dp700-97",
        category: "DP-700",
        scenario: "You need to implement column pruning for query optimization.",
        questionText: "Which file format best supports this?",
        options: ["Parquet (columnar format)", "CSV", "JSON", "Plain text"],
        correctOptionIndex: 0,
        explanation: "Columnar formats like Parquet enable reading only required columns."
    },
    {
        id: "dp700-98",
        category: "DP-700",
        scenario: "Your organization wants to implement a lakehouse architecture.",
        questionText: "What are the key characteristics of a lakehouse?",
        options: ["Combines data lake flexibility with warehouse capabilities", "Data lake only", "Warehouse only", "Separate systems"],
        correctOptionIndex: 0,
        explanation: "Lakehouse provides data lake storage with transactional and governance features."
    },
    {
        id: "dp700-99",
        category: "DP-700",
        scenario: "You need to implement predicate pushdown for optimal query performance.",
        questionText: "Which condition enables predicate pushdown?",
        options: ["Filter on partition or indexed columns before joins", "Filter after all joins", "No filtering", "Client-side filtering"],
        correctOptionIndex: 0,
        explanation: "Pushing predicates to storage layer reduces data read."
    },
    {
        id: "dp700-100",
        category: "DP-700",
        scenario: "Your team needs to implement shared business logic across multiple pipelines.",
        questionText: "Which approach promotes reusability?",
        options: ["Parameterized notebooks and pipeline templates", "Copy-paste code", "Inline logic only", "No standardization"],
        correctOptionIndex: 0,
        explanation: "Parameterized components enable code reuse across pipelines."
    }
];
