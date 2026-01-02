import { Question } from "./exam-questions";

export const dp700QuestionsSet3: Question[] = [
    {
        id: "dp700-101",
        category: "DP-700",
        scenario: "You are implementing a data mesh in Fabric with multiple domain teams.",
        questionText: "Which governance pattern should you implement for cross-domain data sharing?",
        options: ["Federated governance with centralized policies", "No governance", "Each domain creates own rules", "Single team controls all data"],
        correctOptionIndex: 0,
        explanation: "Data mesh requires federated governance with shared policies and domain autonomy."
    },
    {
        id: "dp700-102",
        category: "DP-700",
        scenario: "Your Spark job needs to cache intermediate results for multiple downstream uses.",
        questionText: "Which cache level provides the best balance of performance and reliability?",
        options: ["MEMORY_AND_DISK", "MEMORY_ONLY", "DISK_ONLY", "No caching"],
        correctOptionIndex: 0,
        explanation: "MEMORY_AND_DISK caches in memory first, spilling to disk if needed."
    },
    {
        id: "dp700-103",
        category: "DP-700",
        scenario: "You need to implement materialized views in your Warehouse for dashboard performance.",
        questionText: "When do materialized views provide the most benefit?",
        options: ["Complex aggregations queried frequently", "Simple single-table queries", "Write-heavy workloads", "Ad-hoc queries"],
        correctOptionIndex: 0,
        explanation: "Materialized views pre-compute complex aggregations for fast retrieval."
    },
    {
        id: "dp700-104",
        category: "DP-700",
        scenario: "Your Eventstream needs to route events to different destinations based on content.",
        questionText: "Which Eventstream feature enables this routing?",
        options: ["Filter and route transformations", "Single destination only", "External routing service", "Manual routing"],
        correctOptionIndex: 0,
        explanation: "Eventstream supports filter and route operations for content-based routing."
    },
    {
        id: "dp700-105",
        category: "DP-700",
        scenario: "You need to implement a slowly-changing dimension Type 4.",
        questionText: "What characterizes Type 4 SCD?",
        options: ["Separate history table from current table", "Overwrites only", "Version column", "Effective dates in same table"],
        correctOptionIndex: 0,
        explanation: "Type 4 maintains current records in one table and history in another."
    },
    {
        id: "dp700-106",
        category: "DP-700",
        scenario: "Your pipeline needs to handle transactional consistency across multiple tables.",
        questionText: "Which approach ensures ACID compliance?",
        options: ["Use Delta Lake transactions", "Multiple separate inserts", "Eventual consistency only", "Manual rollback scripts"],
        correctOptionIndex: 0,
        explanation: "Delta Lake provides ACID transactions for multi-table operations."
    },
    {
        id: "dp700-107",
        category: "DP-700",
        scenario: "You need to implement cost tracking for different business units using Fabric.",
        questionText: "Which approach enables departmental cost allocation?",
        options: ["Separate workspaces with capacity tagging", "Single shared workspace", "Manual tracking only", "Cannot track by department"],
        correctOptionIndex: 0,
        explanation: "Separate workspaces and capacities enable cost tracking by department."
    },
    {
        id: "dp700-108",
        category: "DP-700",
        scenario: "Your notebook needs to handle errors gracefully without stopping execution.",
        questionText: "Which Python construct should you use?",
        options: ["try/except blocks", "Assert statements", "Raise always", "Ignore errors"],
        correctOptionIndex: 0,
        explanation: "try/except enables graceful error handling and recovery."
    },
    {
        id: "dp700-109",
        category: "DP-700",
        scenario: "You need to implement data product standards for your organization.",
        questionText: "What should a data product include?",
        options: ["Data, documentation, SLAs, and access policies", "Data only", "Documentation only", "Access policies only"],
        correctOptionIndex: 0,
        explanation: "Data products are complete packages including data, docs, and governance."
    },
    {
        id: "dp700-110",
        category: "DP-700",
        scenario: "Your semantic model uses measures with complex DAX calculations.",
        questionText: "Which optimization improves DAX performance?",
        options: ["Reduce table cardinality and use SUMMARIZE carefully", "Add more measures", "Increase model size", "Use complex nested calculations"],
        correctOptionIndex: 0,
        explanation: "Lower cardinality and efficient DAX patterns improve performance."
    },
    {
        id: "dp700-111",
        category: "DP-700",
        scenario: "You need to implement a data quality scorecard for your pipeline.",
        questionText: "Which metrics should you track?",
        options: ["Completeness, accuracy, timeliness, consistency", "Row counts only", "File sizes only", "Execution time only"],
        correctOptionIndex: 0,
        explanation: "Data quality scorecards track multiple dimensions of quality."
    },
    {
        id: "dp700-112",
        category: "DP-700",
        scenario: "Your pipeline needs to call an external REST API and handle pagination.",
        questionText: "Which activity combination handles this?",
        options: ["Web activity with Until loop for pagination", "Single Web activity", "Copy activity only", "Script activity"],
        correctOptionIndex: 0,
        explanation: "Web activity in an Until loop handles paginated API responses."
    },
    {
        id: "dp700-113",
        category: "DP-700",
        scenario: "You need to implement column encryption for PII data in Lakehouse.",
        questionText: "Which approach should you use?",
        options: ["Encrypt during ingestion using hashing or encryption functions", "Store plaintext", "Rely on transport encryption only", "Post-load encryption"],
        correctOptionIndex: 0,
        explanation: "Column-level encryption should be applied during data ingestion."
    },
    {
        id: "dp700-114",
        category: "DP-700",
        scenario: "Your Delta table checkpoints are becoming very large.",
        questionText: "What maintenance helps reduce checkpoint size?",
        options: ["VACUUM to remove old files", "Add more partitions", "Increase checkpoint interval", "Disable checkpointing"],
        correctOptionIndex: 0,
        explanation: "VACUUM removes references to old files, reducing checkpoint metadata."
    },
    {
        id: "dp700-115",
        category: "DP-700",
        scenario: "You need to implement incremental refresh for your semantic model.",
        questionText: "What is required for incremental refresh?",
        options: ["Date/time column to partition the data", "Full dataset only", "No partitioning", "Manual refresh only"],
        correctOptionIndex: 0,
        explanation: "Incremental refresh requires a date column to identify new data."
    },
    {
        id: "dp700-116",
        category: "DP-700",
        scenario: "Your organization requires immutable audit logs.",
        questionText: "How can Delta Lake support this requirement?",
        options: ["Append-only tables with no VACUUM", "Regular updates allowed", "Delete operations enabled", "No transaction log"],
        correctOptionIndex: 0,
        explanation: "Append-only tables without VACUUM preserve complete history."
    },
    {
        id: "dp700-117",
        category: "DP-700",
        scenario: "You need to implement query result caching in your Warehouse.",
        questionText: "What configuration enables this?",
        options: ["Result set caching is automatic for repeated queries", "Manual cache management", "No caching available", "External caching required"],
        correctOptionIndex: 0,
        explanation: "Fabric Warehouse automatically caches query results."
    },
    {
        id: "dp700-118",
        category: "DP-700",
        scenario: "Your Spark job needs to write to multiple tables atomically.",
        questionText: "Which approach ensures atomic multi-table writes?",
        options: ["Delta Lake multi-table transactions", "Separate write operations", "No atomicity possible", "Manual coordination"],
        correctOptionIndex: 0,
        explanation: "Delta Lake supports atomic writes across multiple tables."
    },
    {
        id: "dp700-119",
        category: "DP-700",
        scenario: "You need to implement data access auditing for compliance.",
        questionText: "Where can you access data access logs?",
        options: ["Microsoft Purview and Fabric activity logs", "Local file logs", "No logging available", "External SIEM only"],
        correctOptionIndex: 0,
        explanation: "Purview and Fabric provide comprehensive access auditing."
    },
    {
        id: "dp700-120",
        category: "DP-700",
        scenario: "Your pipeline needs to validate source data before processing.",
        questionText: "Which pattern should you implement?",
        options: ["Schema validation and data quality checks in pipeline", "Trust source always", "Validate after load only", "Skip validation"],
        correctOptionIndex: 0,
        explanation: "Pre-processing validation prevents bad data from entering the system."
    },
    {
        id: "dp700-121",
        category: "DP-700",
        scenario: "You need to implement a data catalog for discoverability.",
        questionText: "Which Microsoft service provides this capability?",
        options: ["Microsoft Purview Data Catalog", "SharePoint", "Teams", "OneDrive"],
        correctOptionIndex: 0,
        explanation: "Purview Data Catalog enables data asset discovery and governance."
    },
    {
        id: "dp700-122",
        category: "DP-700",
        scenario: "Your Spark job uses UDFs that are causing performance issues.",
        questionText: "What optimization should you consider?",
        options: ["Replace UDFs with native Spark functions", "Add more UDFs", "Increase executor count", "Disable optimization"],
        correctOptionIndex: 0,
        explanation: "Native Spark functions are more efficient than UDFs."
    },
    {
        id: "dp700-123",
        category: "DP-700",
        scenario: "You need to implement a conformed dimension shared across fact tables.",
        questionText: "What is the primary benefit of conformed dimensions?",
        options: ["Consistent analysis across different fact tables", "Faster queries", "Smaller storage", "Simpler ETL"],
        correctOptionIndex: 0,
        explanation: "Conformed dimensions enable consistent cross-subject analysis."
    },
    {
        id: "dp700-124",
        category: "DP-700",
        scenario: "Your KQL database needs to retain data for different periods based on table.",
        questionText: "Which feature enables this?",
        options: ["Retention policies per table", "Single global retention", "Manual deletion", "No retention control"],
        correctOptionIndex: 0,
        explanation: "KQL databases support table-level retention policies."
    },
    {
        id: "dp700-125",
        category: "DP-700",
        scenario: "You need to implement a semantic layer that can be used by multiple BI tools.",
        questionText: "Which Fabric component serves this purpose?",
        options: ["Power BI semantic models with XMLA endpoint", "Lakehouse directly", "Data pipelines", "Notebooks"],
        correctOptionIndex: 0,
        explanation: "Semantic models with XMLA provide cross-tool compatibility."
    },
    {
        id: "dp700-126",
        category: "DP-700",
        scenario: "Your data pipeline needs to support schema evolution.",
        questionText: "Which Delta Lake option enables this?",
        options: ["mergeSchema = true on write operations", "Static schema only", "Reject schema changes", "Manual schema management"],
        correctOptionIndex: 0,
        explanation: "mergeSchema allows automatic schema evolution during writes."
    },
    {
        id: "dp700-127",
        category: "DP-700",
        scenario: "You need to implement data access governance based on sensitivity labels.",
        questionText: "Which integration enables this?",
        options: ["Microsoft Purview sensitivity labels", "Manual access control", "No label support", "Third-party tools only"],
        correctOptionIndex: 0,
        explanation: "Purview sensitivity labels integrate with Fabric for governance."
    },
    {
        id: "dp700-128",
        category: "DP-700",
        scenario: "Your Warehouse query performance varies significantly during the day.",
        questionText: "What might be causing this variance?",
        options: ["Concurrent workload and capacity throttling", "Network issues", "Hard disk speed", "Time zone differences"],
        correctOptionIndex: 0,
        explanation: "Concurrent workloads compete for capacity resources."
    },
    {
        id: "dp700-129",
        category: "DP-700",
        scenario: "You need to implement a unified batch and streaming architecture.",
        questionText: "Which approach achieves this in Fabric?",
        options: ["Delta Lake with Spark for batch and Eventstream for streaming", "Separate systems", "Batch only", "Streaming only"],
        correctOptionIndex: 0,
        explanation: "Delta Lake and Eventstream combine for unified batch/streaming."
    },
    {
        id: "dp700-130",
        category: "DP-700",
        scenario: "Your notifications need to include dynamic content from pipeline execution.",
        questionText: "How can you include execution details in notifications?",
        options: ["Use pipeline expression variables and system variables", "Static text only", "Manual editing", "No dynamic content"],
        correctOptionIndex: 0,
        explanation: "Expression variables provide access to execution metadata."
    },
    {
        id: "dp700-131",
        category: "DP-700",
        scenario: "You are migrating from Azure Synapse Analytics to Fabric Warehouse.",
        questionText: "Which objects can be migrated most directly?",
        options: ["Tables, views, stored procedures", "Only tables", "Only views", "Full cluster configuration"],
        correctOptionIndex: 0,
        explanation: "Most T-SQL objects migrate with minimal changes."
    },
    {
        id: "dp700-132",
        category: "DP-700",
        scenario: "Your data pipeline needs to implement data versioning for audit purposes.",
        questionText: "Which Delta Lake feature supports data versioning?",
        options: ["Time travel with version history", "No versioning available", "External version control", "File naming conventions"],
        correctOptionIndex: 0,
        explanation: "Delta Lake automatically versions data with time travel capabilities."
    },
    {
        id: "dp700-133",
        category: "DP-700",
        scenario: "You need to optimize memory usage in your Spark cluster.",
        questionText: "Which configuration helps reduce memory pressure?",
        options: ["Appropriate partition sizes and broadcast thresholds", "Larger partitions", "More caching", "Single partition"],
        correctOptionIndex: 0,
        explanation: "Right-sized partitions and broadcast settings optimize memory use."
    },
    {
        id: "dp700-134",
        category: "DP-700",
        scenario: "Your organization requires data to be encrypted at rest.",
        questionText: "How does Fabric handle encryption at rest?",
        options: ["Automatic encryption by default", "Manual configuration required", "No encryption available", "Only for premium"],
        correctOptionIndex: 0,
        explanation: "Fabric automatically encrypts data at rest."
    },
    {
        id: "dp700-135",
        category: "DP-700",
        scenario: "You need to implement a data validation framework.",
        questionText: "Which approach provides comprehensive validation?",
        options: ["Expectations framework with Great Expectations or custom validations", "Row counts only", "Spot checks", "No validation"],
        correctOptionIndex: 0,
        explanation: "Expectations frameworks provide declarative data validation."
    },
    {
        id: "dp700-136",
        category: "DP-700",
        scenario: "Your Lakehouse tables need to support point-in-time queries.",
        questionText: "Which syntax enables point-in-time queries?",
        options: ["TIMESTAMP AS OF or VERSION AS OF", "Standard SELECT", "No time travel in Lakehouse", "External system required"],
        correctOptionIndex: 0,
        explanation: "Delta tables support time travel queries with AS OF clauses."
    },
    {
        id: "dp700-137",
        category: "DP-700",
        scenario: "You need to implement cost monitoring for Fabric usage.",
        questionText: "Where can you view capacity consumption metrics?",
        options: ["Fabric Capacity Metrics app", "Azure Cost Management", "Power BI only", "No visibility"],
        correctOptionIndex: 0,
        explanation: "Capacity Metrics app provides detailed consumption insights."
    },
    {
        id: "dp700-138",
        category: "DP-700",
        scenario: "Your Dataflow Gen2 transformations need to leverage source query folding.",
        questionText: "Which transformation helps verify query folding is occurring?",
        options: ["View the generated query in diagnostics", "Assume folding works", "Measure execution time only", "No way to verify"],
        correctOptionIndex: 0,
        explanation: "Query diagnostics show whether transformations fold to source."
    },
    {
        id: "dp700-139",
        category: "DP-700",
        scenario: "You need to implement adaptive query processing in your Warehouse.",
        questionText: "What benefit does this provide?",
        options: ["Automatic optimization based on actual data distribution", "Static query plans", "Manual optimization only", "No adaptation"],
        correctOptionIndex: 0,
        explanation: "Adaptive processing adjusts to actual runtime conditions."
    },
    {
        id: "dp700-140",
        category: "DP-700",
        scenario: "Your pipeline needs to implement a master data management process.",
        questionText: "Which pattern helps maintain master data quality?",
        options: ["Golden record with matching and merging logic", "First record wins", "Last record wins", "Random selection"],
        correctOptionIndex: 0,
        explanation: "Golden record patterns create authoritative master data."
    },
    {
        id: "dp700-141",
        category: "DP-700",
        scenario: "You need to optimize your semantic model for mobile consumption.",
        questionText: "Which optimization should you consider?",
        options: ["Reduce model size and pre-aggregate for common queries", "Increase model size", "More complex DAX", "No optimization needed"],
        correctOptionIndex: 0,
        explanation: "Smaller models with pre-aggregations perform better on mobile."
    },
    {
        id: "dp700-142",
        category: "DP-700",
        scenario: "Your Spark job reading Parquet files is slow despite good cluster size.",
        questionText: "What optimization should you check first?",
        options: ["File sizes and partition pruning", "Add more nodes only", "Reduce data volume", "Change to CSV"],
        correctOptionIndex: 0,
        explanation: "File organization significantly impacts Parquet read performance."
    },
    {
        id: "dp700-143",
        category: "DP-700",
        scenario: "You need to implement data profiling for a new source system.",
        questionText: "What should data profiling analyze?",
        options: ["Column statistics, patterns, anomalies, relationships", "Row counts only", "Schema only", "File sizes only"],
        correctOptionIndex: 0,
        explanation: "Comprehensive profiling examines quality across multiple dimensions."
    },
    {
        id: "dp700-144",
        category: "DP-700",
        scenario: "Your KQL queries need to aggregate over time windows.",
        questionText: "Which KQL function supports time-based aggregation?",
        options: ["summarize with bin() function", "project only", "extend only", "join only"],
        correctOptionIndex: 0,
        explanation: "bin() creates time buckets for aggregation in KQL."
    },
    {
        id: "dp700-145",
        category: "DP-700",
        scenario: "You need to implement a data lakehouse with separation of compute and storage.",
        questionText: "How does Fabric achieve this separation?",
        options: ["OneLake storage with multiple compute engines", "Coupled compute and storage", "External storage only", "Single compute engine"],
        correctOptionIndex: 0,
        explanation: "OneLake provides storage accessible by multiple Fabric compute engines."
    },
    {
        id: "dp700-146",
        category: "DP-700",
        scenario: "Your pipeline needs to dynamically select between data sources.",
        questionText: "Which feature enables conditional data source selection?",
        options: ["If Condition activity with parameterized sources", "Static source binding", "Manual switching", "Two separate pipelines"],
        correctOptionIndex: 0,
        explanation: "Conditional logic with parameters enables dynamic source selection."
    },
    {
        id: "dp700-147",
        category: "DP-700",
        scenario: "You need to implement a dimensional model with junk dimensions.",
        questionText: "When should you use a junk dimension?",
        options: ["To consolidate low-cardinality flags and indicators", "For high-cardinality attributes", "For date attributes", "Never"],
        correctOptionIndex: 0,
        explanation: "Junk dimensions combine miscellaneous flags to reduce fact table width."
    },
    {
        id: "dp700-148",
        category: "DP-700",
        scenario: "Your Warehouse needs to handle variable workloads efficiently.",
        questionText: "Which Fabric feature helps with this?",
        options: ["Auto-scaling capacity", "Fixed capacity only", "Manual scaling", "No scaling available"],
        correctOptionIndex: 0,
        explanation: "Fabric can scale capacity to handle varying workloads."
    },
    {
        id: "dp700-149",
        category: "DP-700",
        scenario: "You need to implement data transformation using Spark DataFrames.",
        questionText: "Which approach provides better performance?",
        options: ["Use DataFrame API over RDD API", "RDD API always", "SQL strings always", "UDFs always"],
        correctOptionIndex: 0,
        explanation: "DataFrame API enables Catalyst optimizer for better performance."
    },
    {
        id: "dp700-150",
        category: "DP-700",
        scenario: "Your organization wants to implement data products as self-service assets.",
        questionText: "What makes a good data product?",
        options: ["Self-describing, discoverable, and maintained with SLAs", "Raw data dumps", "Undocumented tables", "Ad-hoc queries"],
        correctOptionIndex: 0,
        explanation: "Data products are complete, documented, and governed assets."
    }
];
