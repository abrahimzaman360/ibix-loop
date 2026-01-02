import { Question } from "./exam-questions";

export const dp700Questions: Question[] = [
    {
        id: "dp700-1",
        category: "DP-700",
        scenario: "You are a data engineer for a retail company using Microsoft Fabric. You need to ingest large volumes of point-of-sale data (approx. 5TB daily) into OneLake.",
        questionText: "Which ingestion method minimizes latency and ensures data is immediately available for querying?",
        options: ["Use Dataflow Gen2", "Use Copy activity in Data Pipeline", "Use a Shortcut to mount ADLS Gen2", "Use Spark Structured Streaming"],
        correctOptionIndex: 2,
        explanation: "Shortcuts provide zero-copy access and immediate availability without data movement."
    },
    {
        id: "dp700-2",
        category: "DP-700",
        scenario: "Your Spark notebook processes IoT telemetry but runs slowly due to many small Parquet files.",
        questionText: "Which optimization technique should you apply?",
        options: ["Increase driver node size", "Run OPTIMIZE command on Delta table", "Switch to CSV format", "Partition by high-cardinality column"],
        correctOptionIndex: 1,
        explanation: "OPTIMIZE compacts small files into larger ones, improving read performance."
    },
    {
        id: "dp700-3",
        category: "DP-700",
        scenario: "A marketing team needs ad-hoc SQL analysis on Lakehouse data. They know SQL but not Spark.",
        questionText: "Which endpoint should they use?",
        options: ["SQL Analytics Endpoint", "Spark Session endpoint", "OneLake DFS endpoint", "Azure SQL Database endpoint"],
        correctOptionIndex: 0,
        explanation: "SQL Analytics Endpoint provides T-SQL interface over Lakehouse data."
    },
    {
        id: "dp700-4",
        category: "DP-700",
        scenario: "You need row-level security for a Direct Lake semantic model sourced from Fabric Warehouse.",
        questionText: "Where should you define RLS logic?",
        options: ["Power BI report visuals", "Warehouse using T-SQL predicates", "Source CSV files", "Spark ingestion notebook"],
        correctOptionIndex: 1,
        explanation: "Define RLS in Warehouse for consistent security across all downstream tools."
    },
    {
        id: "dp700-5",
        category: "DP-700",
        scenario: "You have a medallion architecture with Bronze, Silver, and Gold layers in your Lakehouse.",
        questionText: "What is the primary purpose of the Silver layer?",
        options: ["Store raw data as-is", "Apply cleansing and conforming transformations", "Create business-level aggregates", "Archive historical data"],
        correctOptionIndex: 1,
        explanation: "Silver layer contains cleansed, validated, and conformed data."
    },
    {
        id: "dp700-6",
        category: "DP-700",
        scenario: "You need to schedule a Data Pipeline to run every 15 minutes during business hours only.",
        questionText: "Which scheduling approach should you use?",
        options: ["Tumbling window trigger with time range", "Schedule trigger with recurrence pattern", "Event-based trigger", "Manual execution only"],
        correctOptionIndex: 1,
        explanation: "Schedule triggers support recurrence patterns with specific time windows."
    },
    {
        id: "dp700-7",
        category: "DP-700",
        scenario: "Your Delta table has grown to 500GB with 10,000+ small files from frequent batch inserts.",
        questionText: "Which maintenance operation should you run first?",
        options: ["VACUUM", "OPTIMIZE", "Z-ORDER", "RESTORE"],
        correctOptionIndex: 1,
        explanation: "OPTIMIZE should run first to compact files before VACUUM removes old versions."
    },
    {
        id: "dp700-8",
        category: "DP-700",
        scenario: "You need to implement slowly changing dimension Type 2 in your Fabric Warehouse.",
        questionText: "Which approach is most appropriate?",
        options: ["Use MERGE with UPDATE only", "Track history with effective dates and current flag", "Replace entire table daily", "Use materialized views"],
        correctOptionIndex: 1,
        explanation: "SCD Type 2 tracks history using effective dates and a current record flag."
    },
    {
        id: "dp700-9",
        category: "DP-700",
        scenario: "Your organization requires disaster recovery for critical Fabric workspaces.",
        questionText: "What is the recommended approach for workspace backup?",
        options: ["Export to Git repository", "Manual export to ADLS", "Use workspace templates", "Fabric handles this automatically"],
        correctOptionIndex: 0,
        explanation: "Git integration provides version control and serves as workspace backup."
    },
    {
        id: "dp700-10",
        category: "DP-700",
        scenario: "You need to load data from an on-premises SQL Server into a Fabric Lakehouse.",
        questionText: "Which component is required for connectivity?",
        options: ["On-premises data gateway", "VNet integration only", "Direct internet connection", "Azure ExpressRoute only"],
        correctOptionIndex: 0,
        explanation: "On-premises data gateway bridges on-premises data sources to Fabric."
    },
    {
        id: "dp700-11",
        category: "DP-700",
        scenario: "You are designing a real-time analytics solution using Fabric Eventstream.",
        questionText: "Which source type is NOT supported by Eventstream?",
        options: ["Azure Event Hubs", "Azure IoT Hub", "Custom application via SDK", "On-premises file system"],
        correctOptionIndex: 3,
        explanation: "Eventstream works with streaming sources, not on-premises file systems directly."
    },
    {
        id: "dp700-12",
        category: "DP-700",
        scenario: "Your team needs to collaborate on Spark notebooks with version control.",
        questionText: "Which integration should you configure?",
        options: ["Azure DevOps Git", "SharePoint", "OneDrive", "Teams channel"],
        correctOptionIndex: 0,
        explanation: "Git integration enables version control and collaboration for Fabric items."
    },
    {
        id: "dp700-13",
        category: "DP-700",
        scenario: "You need to enforce that certain columns never leave encrypted state in the Warehouse.",
        questionText: "Which feature should you implement?",
        options: ["Row-level security", "Column-level encryption", "Dynamic data masking", "Always Encrypted"],
        correctOptionIndex: 3,
        explanation: "Always Encrypted ensures data remains encrypted even during processing."
    },
    {
        id: "dp700-14",
        category: "DP-700",
        scenario: "Your Data Pipeline needs to handle failures gracefully and retry specific activities.",
        questionText: "Which configuration enables this behavior?",
        options: ["Retry policy on activity", "Try-catch container", "Pipeline parameters", "Linked service timeout"],
        correctOptionIndex: 0,
        explanation: "Each activity can have retry policies configured for failure handling."
    },
    {
        id: "dp700-15",
        category: "DP-700",
        scenario: "You need to access the same data from both a Lakehouse and a Warehouse without duplication.",
        questionText: "Which feature enables this?",
        options: ["Data mirroring", "Shortcuts", "Linked services", "External tables only"],
        correctOptionIndex: 1,
        explanation: "Shortcuts allow referencing data across Fabric items without copying."
    },
    {
        id: "dp700-16",
        category: "DP-700",
        scenario: "Your Spark job processes 1TB of data but frequently fails with out-of-memory errors.",
        questionText: "Which optimization should you try first?",
        options: ["Increase executor memory", "Use broadcast joins for small tables", "Repartition data appropriately", "All of the above based on analysis"],
        correctOptionIndex: 3,
        explanation: "Memory issues require analyzing the specific cause before applying fixes."
    },
    {
        id: "dp700-17",
        category: "DP-700",
        scenario: "You need to implement data quality checks before data enters the Gold layer.",
        questionText: "Where should you implement these checks?",
        options: ["In the Bronze layer ingestion", "During Silver to Gold transformation", "In Power BI reports", "After Gold layer load"],
        correctOptionIndex: 1,
        explanation: "Quality gates should validate data before promotion to Gold layer."
    },
    {
        id: "dp700-18",
        category: "DP-700",
        scenario: "Your organization uses multiple Fabric capacities for different departments.",
        questionText: "How can you share a Lakehouse between capacities?",
        options: ["Create shortcuts", "Move the Lakehouse", "Share the workspace", "This is not possible"],
        correctOptionIndex: 0,
        explanation: "Shortcuts enable cross-capacity data access without moving items."
    },
    {
        id: "dp700-19",
        category: "DP-700",
        scenario: "You need to monitor long-running Spark jobs and identify performance bottlenecks.",
        questionText: "Which tool should you use?",
        options: ["Spark UI in monitoring hub", "Power BI dashboard", "Azure Monitor only", "SQL Profiler"],
        correctOptionIndex: 0,
        explanation: "Spark UI provides detailed job execution metrics and DAG visualization."
    },
    {
        id: "dp700-20",
        category: "DP-700",
        scenario: "Your Delta table queries are slow when filtering on non-partitioned columns.",
        questionText: "Which optimization can help?",
        options: ["Add more partitions", "Apply Z-ORDER on filter columns", "Increase compute size", "Use CSV instead"],
        correctOptionIndex: 1,
        explanation: "Z-ORDER colocates related data to improve filter performance on non-partition columns."
    },
    {
        id: "dp700-21",
        category: "DP-700",
        scenario: "You need to implement a data pipeline that processes files only when they arrive.",
        questionText: "Which trigger type should you use?",
        options: ["Schedule trigger", "Tumbling window trigger", "Storage event trigger", "Manual trigger"],
        correctOptionIndex: 2,
        explanation: "Storage event triggers respond to file creation/modification events."
    },
    {
        id: "dp700-22",
        category: "DP-700",
        scenario: "Your semantic model uses Import mode but data freshness requirements changed to near-real-time.",
        questionText: "Which mode should you switch to?",
        options: ["DirectQuery", "Direct Lake", "Dual storage", "Live connection"],
        correctOptionIndex: 1,
        explanation: "Direct Lake provides near-real-time access to Lakehouse/Warehouse data."
    },
    {
        id: "dp700-23",
        category: "DP-700",
        scenario: "You need to parameterize your Data Pipeline to process different file paths dynamically.",
        questionText: "Which feature should you use?",
        options: ["Pipeline parameters", "Global parameters", "Linked service parameters", "Activity parameters only"],
        correctOptionIndex: 0,
        explanation: "Pipeline parameters allow dynamic values to be passed at runtime."
    },
    {
        id: "dp700-24",
        category: "DP-700",
        scenario: "Your Warehouse queries are running slowly due to large table scans.",
        questionText: "Which feature can help optimize query performance?",
        options: ["Clustered columnstore indexes", "Heap tables", "Row-store indexes only", "Temporary tables"],
        correctOptionIndex: 0,
        explanation: "Clustered columnstore indexes provide excellent compression and scan performance."
    },
    {
        id: "dp700-25",
        category: "DP-700",
        scenario: "You need to implement incremental data loading from a source system.",
        questionText: "Which pattern should you use?",
        options: ["Full load every time", "Watermark-based incremental load", "Random sampling", "Manual file selection"],
        correctOptionIndex: 1,
        explanation: "Watermark columns track last processed point for efficient incremental loads."
    },
    {
        id: "dp700-26",
        category: "DP-700",
        scenario: "Your Dataflow Gen2 is timing out when processing large datasets.",
        questionText: "Which optimization should you consider?",
        options: ["Enable staging", "Reduce data volume per run", "Increase refresh timeout", "All of the above"],
        correctOptionIndex: 3,
        explanation: "Multiple strategies may be needed depending on the specific bottleneck."
    },
    {
        id: "dp700-27",
        category: "DP-700",
        scenario: "You need to create a composite semantic model combining data from multiple sources.",
        questionText: "Which feature enables this?",
        options: ["Composite models with DirectQuery connections", "Single import model", "Paginated reports", "Dataflows only"],
        correctOptionIndex: 0,
        explanation: "Composite models can combine Import, DirectQuery, and Direct Lake tables."
    },
    {
        id: "dp700-28",
        category: "DP-700",
        scenario: "Your organization requires audit logging for all data access in Fabric.",
        questionText: "Where can you find these audit logs?",
        options: ["Microsoft Purview", "Fabric admin portal", "Azure Monitor", "All of the above"],
        correctOptionIndex: 3,
        explanation: "Audit logs can be accessed through multiple Microsoft compliance tools."
    },
    {
        id: "dp700-29",
        category: "DP-700",
        scenario: "You need to implement data lineage tracking across your Fabric environment.",
        questionText: "Which tool provides this capability?",
        options: ["Microsoft Purview", "Azure Data Catalog", "Fabric monitoring hub only", "Power BI lineage view only"],
        correctOptionIndex: 0,
        explanation: "Microsoft Purview provides comprehensive data lineage across Fabric."
    },
    {
        id: "dp700-30",
        category: "DP-700",
        scenario: "Your Spark notebook needs to read secrets without exposing them in code.",
        questionText: "Which approach should you use?",
        options: ["Azure Key Vault integration", "Hardcode in notebook", "Store in Lakehouse files", "Environment variables"],
        correctOptionIndex: 0,
        explanation: "Azure Key Vault securely stores and retrieves secrets."
    },
    {
        id: "dp700-31",
        category: "DP-700",
        scenario: "You need to implement CDC (Change Data Capture) from Azure SQL Database to Lakehouse.",
        questionText: "Which approach is most efficient?",
        options: ["Full table replication daily", "Use Fabric mirroring", "Manual export/import", "Linked server queries"],
        correctOptionIndex: 1,
        explanation: "Fabric mirroring provides automatic CDC replication from supported sources."
    },
    {
        id: "dp700-32",
        category: "DP-700",
        scenario: "Your team needs different access levels for development, test, and production workspaces.",
        questionText: "Which security model should you implement?",
        options: ["Workspace roles per environment", "Single workspace with item permissions", "Capacity-level security only", "Azure AD groups for everything"],
        correctOptionIndex: 0,
        explanation: "Separate workspaces with appropriate roles provide environment isolation."
    },
    {
        id: "dp700-33",
        category: "DP-700",
        scenario: "You need to calculate running totals and moving averages in your Warehouse queries.",
        questionText: "Which SQL feature should you use?",
        options: ["Subqueries", "Window functions", "Stored procedures", "User-defined functions"],
        correctOptionIndex: 1,
        explanation: "Window functions efficiently calculate running aggregates over partitions."
    },
    {
        id: "dp700-34",
        category: "DP-700",
        scenario: "Your Eventstream needs to perform complex event processing with time windows.",
        questionText: "Which destination supports this processing?",
        options: ["KQL Database", "Lakehouse directly", "Warehouse directly", "Power BI"],
        correctOptionIndex: 0,
        explanation: "KQL Database excels at time-series and streaming analytics."
    },
    {
        id: "dp700-35",
        category: "DP-700",
        scenario: "You need to implement object-level security in your Warehouse.",
        questionText: "Which approach should you use?",
        options: ["GRANT/DENY permissions on tables and views", "Row-level security only", "Column-level security only", "Workspace roles only"],
        correctOptionIndex: 0,
        explanation: "GRANT/DENY provides granular object-level access control."
    },
    {
        id: "dp700-36",
        category: "DP-700",
        scenario: "Your Delta table time travel queries are returning errors for older versions.",
        questionText: "What is the likely cause?",
        options: ["VACUUM removed old files", "Table corruption", "Permission issues", "Network timeout"],
        correctOptionIndex: 0,
        explanation: "VACUUM removes old file versions, breaking time travel for those points."
    },
    {
        id: "dp700-37",
        category: "DP-700",
        scenario: "You need to ensure your Spark jobs handle schema evolution gracefully.",
        questionText: "Which Delta Lake feature helps with this?",
        options: ["Schema enforcement", "Schema evolution with mergeSchema", "Manual schema management", "Ignore schema changes"],
        correctOptionIndex: 1,
        explanation: "mergeSchema option allows automatic schema evolution during writes."
    },
    {
        id: "dp700-38",
        category: "DP-700",
        scenario: "Your organization requires that all Fabric items follow naming conventions.",
        questionText: "How can you enforce this?",
        options: ["Governance policies in admin portal", "Manual review only", "Custom validation scripts", "This cannot be enforced"],
        correctOptionIndex: 0,
        explanation: "Fabric admin portal governance settings can enforce naming policies."
    },
    {
        id: "dp700-39",
        category: "DP-700",
        scenario: "You need to implement a data vault architecture in Fabric.",
        questionText: "Which Fabric item is best suited for the raw vault?",
        options: ["Lakehouse with Delta tables", "Warehouse only", "KQL Database", "Datamart"],
        correctOptionIndex: 0,
        explanation: "Lakehouse with Delta provides flexibility and versioning for raw vault patterns."
    },
    {
        id: "dp700-40",
        category: "DP-700",
        scenario: "Your Spark cluster is underutilized during data processing.",
        questionText: "Which configuration might help improve parallelism?",
        options: ["Increase shuffle partitions", "Decrease executor count", "Use single partition", "Disable caching"],
        correctOptionIndex: 0,
        explanation: "More shuffle partitions can improve parallelism for large datasets."
    },
    {
        id: "dp700-41",
        category: "DP-700",
        scenario: "You need to implement data masking for PII columns in reports.",
        questionText: "Which feature should you use at the Warehouse level?",
        options: ["Dynamic data masking", "Static data encryption", "Row-level security", "Column encryption"],
        correctOptionIndex: 0,
        explanation: "Dynamic data masking hides sensitive data without changing stored values."
    },
    {
        id: "dp700-42",
        category: "DP-700",
        scenario: "Your pipeline needs to loop through a list of tables and process each one.",
        questionText: "Which activity should you use?",
        options: ["ForEach activity", "Until activity", "Switch activity", "If Condition activity"],
        correctOptionIndex: 0,
        explanation: "ForEach iterates over a collection to process each item."
    },
    {
        id: "dp700-43",
        category: "DP-700",
        scenario: "You need to implement idempotent data loading to prevent duplicates on reruns.",
        questionText: "Which approach is most reliable?",
        options: ["MERGE statement with proper keys", "INSERT only operations", "TRUNCATE and reload", "Manual deduplication"],
        correctOptionIndex: 0,
        explanation: "MERGE with proper matching keys ensures idempotent upsert operations."
    },
    {
        id: "dp700-44",
        category: "DP-700",
        scenario: "Your semantic model refresh is failing due to timeout.",
        questionText: "Which optimization should you consider first?",
        options: ["Reduce data volume with filters", "Switch to DirectQuery", "Increase capacity size", "Disable refresh"],
        correctOptionIndex: 0,
        explanation: "Reducing data volume through incremental refresh or filters often helps most."
    },
    {
        id: "dp700-45",
        category: "DP-700",
        scenario: "You need to implement CI/CD for your Fabric development workflow.",
        questionText: "Which integration is essential?",
        options: ["Azure DevOps or GitHub Actions", "Manual deployments", "PowerShell scripts only", "FTP transfers"],
        correctOptionIndex: 0,
        explanation: "Git-based CI/CD pipelines enable automated testing and deployment."
    },
    {
        id: "dp700-46",
        category: "DP-700",
        scenario: "Your Warehouse query performance degrades after loading new data.",
        questionText: "What maintenance task might be needed?",
        options: ["Update statistics", "Rebuild indexes", "Vacuum tables", "Both A and B"],
        correctOptionIndex: 3,
        explanation: "Statistics and indexes should be maintained after significant data changes."
    },
    {
        id: "dp700-47",
        category: "DP-700",
        scenario: "You need to implement a star schema in your Warehouse.",
        questionText: "Which design principle is most important?",
        options: ["Denormalized dimension tables with surrogate keys", "Fully normalized tables", "Single flat table", "Many-to-many relationships only"],
        correctOptionIndex: 0,
        explanation: "Star schemas use denormalized dimensions with surrogate keys for performance."
    },
    {
        id: "dp700-48",
        category: "DP-700",
        scenario: "Your Eventstream is receiving duplicate events from the source.",
        questionText: "How should you handle this?",
        options: ["Implement deduplication in destination", "Change event source", "Ignore duplicates", "Increase throughput"],
        correctOptionIndex: 0,
        explanation: "Deduplication logic at the destination ensures data quality."
    },
    {
        id: "dp700-49",
        category: "DP-700",
        scenario: "You need to troubleshoot a failed Data Pipeline run.",
        questionText: "Where should you look first?",
        options: ["Pipeline run history and activity outputs", "Capacity metrics", "Workspace settings", "Azure portal"],
        correctOptionIndex: 0,
        explanation: "Pipeline run history shows detailed execution logs and error messages."
    },
    {
        id: "dp700-50",
        category: "DP-700",
        scenario: "Your organization wants to implement a data mesh architecture in Fabric.",
        questionText: "Which feature best supports domain-oriented data ownership?",
        options: ["Workspace per domain with shortcuts", "Single centralized warehouse", "Shared capacity only", "Manual data copies"],
        correctOptionIndex: 0,
        explanation: "Domain workspaces with shortcuts enable federated data mesh patterns."
    }
];
