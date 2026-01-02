import { Question } from "./exam-questions";

export const dp700QuestionsSet4: Question[] = [
    {
        id: "dp700-151",
        category: "DP-700",
        scenario: "You are designing a data ingestion strategy for IoT sensor data arriving at 1M events per second.",
        questionText: "Which Fabric component is best suited for initial ingestion?",
        options: ["Eventstream with Event Hub source", "Direct Lakehouse writes", "Batch pipeline", "Dataflow Gen2"],
        correctOptionIndex: 0,
        explanation: "Eventstream handles high-throughput streaming ingestion efficiently."
    },
    {
        id: "dp700-152",
        category: "DP-700",
        scenario: "Your Delta table OPTIMIZE operations are taking too long.",
        questionText: "Which configuration can help reduce OPTIMIZE duration?",
        options: ["Reduce scope with WHERE clause or process partitions incrementally", "Increase file target size", "Disable OPTIMIZE", "Run more frequently"],
        correctOptionIndex: 0,
        explanation: "Scoping OPTIMIZE to specific partitions reduces execution time."
    },
    {
        id: "dp700-153",
        category: "DP-700",
        scenario: "You need to implement a staging area for raw data before transformation.",
        questionText: "Which Lakehouse layer typically serves this purpose?",
        options: ["Bronze layer", "Silver layer", "Gold layer", "Platinum layer"],
        correctOptionIndex: 0,
        explanation: "Bronze layer stores raw data in its original form."
    },
    {
        id: "dp700-154",
        category: "DP-700",
        scenario: "Your semantic model needs to handle slowly changing aggregation periods.",
        questionText: "Which DAX feature helps with dynamic time intelligence?",
        options: ["Time intelligence functions with date tables", "Static measures only", "Calculated columns only", "No dynamic capability"],
        correctOptionIndex: 0,
        explanation: "DAX time intelligence enables dynamic period comparisons."
    },
    {
        id: "dp700-155",
        category: "DP-700",
        scenario: "You need to implement data lineage that crosses Fabric and external systems.",
        questionText: "Which approach provides end-to-end lineage?",
        options: ["Microsoft Purview with custom connectors", "Fabric lineage only", "Manual documentation", "No cross-system lineage"],
        correctOptionIndex: 0,
        explanation: "Purview supports lineage across Microsoft and custom systems."
    },
    {
        id: "dp700-156",
        category: "DP-700",
        scenario: "Your Spark job memory usage spikes during aggregation operations.",
        questionText: "Which approach can reduce memory pressure during aggregations?",
        options: ["Use aggressive repartitioning before aggregation", "Single partition", "More memory only", "Disable aggregations"],
        correctOptionIndex: 0,
        explanation: "Better partitioning distributes aggregation work across executors."
    },
    {
        id: "dp700-157",
        category: "DP-700",
        scenario: "You need to implement multi-tenant data isolation in Fabric.",
        questionText: "Which approach provides strongest isolation?",
        options: ["Separate workspaces per tenant", "Row-level security only", "Single table with tenant column", "No tenant isolation"],
        correctOptionIndex: 0,
        explanation: "Workspace isolation provides strongest data separation."
    },
    {
        id: "dp700-158",
        category: "DP-700",
        scenario: "Your pipeline needs to handle files with different encodings.",
        questionText: "Which property should you configure in the Copy activity?",
        options: ["File format encoding settings", "Column mapping only", "Compression settings", "Batch size"],
        correctOptionIndex: 0,
        explanation: "Encoding settings ensure correct character interpretation."
    },
    {
        id: "dp700-159",
        category: "DP-700",
        scenario: "You need to implement data mart refresh optimization.",
        questionText: "Which pattern minimizes refresh time for incremental updates?",
        options: ["Incremental refresh with change detection", "Full refresh always", "Manual incremental", "No refresh scheduling"],
        correctOptionIndex: 0,
        explanation: "Incremental refresh only processes changed data."
    },
    {
        id: "dp700-160",
        category: "DP-700",
        scenario: "Your Warehouse stored procedures need to be parameterized.",
        questionText: "What is the correct syntax for stored procedure parameters?",
        options: ["CREATE PROCEDURE name @param datatype AS ...", "CREATE PROCEDURE name (param) AS ...", "No parameters supported", "Variables only"],
        correctOptionIndex: 0,
        explanation: "T-SQL uses @ prefix for stored procedure parameters."
    },
    {
        id: "dp700-161",
        category: "DP-700",
        scenario: "You need to implement data partitioning for query performance.",
        questionText: "Which column type is best for partitioning a sales fact table?",
        options: ["Date/time column with appropriate granularity", "High-cardinality customer ID", "Sequential transaction ID", "Boolean flags"],
        correctOptionIndex: 0,
        explanation: "Date partitioning aligns with typical analytical query patterns."
    },
    {
        id: "dp700-162",
        category: "DP-700",
        scenario: "Your Eventstream processing needs to handle out-of-order events.",
        questionText: "Which feature helps with event ordering?",
        options: ["Watermarking and event time processing", "Arrival time processing only", "Ignore ordering", "Manual reordering"],
        correctOptionIndex: 0,
        explanation: "Watermarking handles late and out-of-order events."
    },
    {
        id: "dp700-163",
        category: "DP-700",
        scenario: "You need to implement column statistics for query optimization.",
        questionText: "When should statistics be updated?",
        options: ["After significant data changes", "Never", "Only on creation", "Every query"],
        correctOptionIndex: 0,
        explanation: "Statistics should reflect current data distribution for optimal plans."
    },
    {
        id: "dp700-164",
        category: "DP-700",
        scenario: "Your semantic model needs to implement role-playing dimensions.",
        questionText: "How should you handle a date dimension used for multiple purposes?",
        options: ["Create multiple relationships with different role names", "Single date relationship", "Duplicate the dimension table", "Avoid role-playing"],
        correctOptionIndex: 0,
        explanation: "Inactive relationships with USERELATIONSHIP enable role-playing."
    },
    {
        id: "dp700-165",
        category: "DP-700",
        scenario: "You need to implement change tracking for audit purposes.",
        questionText: "Which Delta Lake feature provides change tracking?",
        options: ["Change Data Feed (CDF)", "Standard reads only", "External tracking", "Manual logging"],
        correctOptionIndex: 0,
        explanation: "Change Data Feed captures row-level changes for downstream processing."
    },
    {
        id: "dp700-166",
        category: "DP-700",
        scenario: "Your pipeline needs to handle XML source files.",
        questionText: "Which Fabric component best handles XML parsing?",
        options: ["Dataflow Gen2 with XML connector", "Direct Spark reads", "Copy activity only", "Manual parsing"],
        correctOptionIndex: 0,
        explanation: "Dataflow Gen2 provides built-in XML parsing capabilities."
    },
    {
        id: "dp700-167",
        category: "DP-700",
        scenario: "You need to implement disaster recovery for critical workloads.",
        questionText: "Which approach provides best RPO for Fabric Lakehouse?",
        options: ["Cross-region replication via shortcuts and Git", "Single region only", "Manual backups", "No DR available"],
        correctOptionIndex: 0,
        explanation: "Cross-region strategies with shortcuts and Git provide DR capabilities."
    },
    {
        id: "dp700-168",
        category: "DP-700",
        scenario: "Your Spark job uses collect() on large datasets.",
        questionText: "Why is this problematic and what is the alternative?",
        options: ["collect() brings all data to driver; use distributed operations instead", "collect() is always fine", "Use collect() more often", "No alternatives exist"],
        correctOptionIndex: 0,
        explanation: "collect() can overwhelm driver memory; distributed operations are safer."
    },
    {
        id: "dp700-169",
        category: "DP-700",
        scenario: "You need to implement hierarchies in your semantic model.",
        questionText: "What is the benefit of defining explicit hierarchies?",
        options: ["Enables drill-down navigation and improves user experience", "No benefit", "Slows performance", "Required by Fabric"],
        correctOptionIndex: 0,
        explanation: "Hierarchies improve report navigation and usability."
    },
    {
        id: "dp700-170",
        category: "DP-700",
        scenario: "Your data mart needs to support ad-hoc query patterns.",
        questionText: "Which indexing strategy best supports varied queries?",
        options: ["Columnstore indexes for analytics workloads", "Many row-store indexes", "No indexes", "Heap only"],
        correctOptionIndex: 0,
        explanation: "Columnstore indexes excel at analytical ad-hoc queries."
    },
    {
        id: "dp700-171",
        category: "DP-700",
        scenario: "You need to implement data anonymization for testing environments.",
        questionText: "Which technique preserves data patterns while protecting privacy?",
        options: ["Data masking with consistent substitution", "Delete all data", "Use production data", "No anonymization"],
        correctOptionIndex: 0,
        explanation: "Consistent masking preserves referential integrity while protecting privacy."
    },
    {
        id: "dp700-172",
        category: "DP-700",
        scenario: "Your notebook needs to interact with Fabric REST APIs.",
        questionText: "Which authentication method should you use?",
        options: ["Service principal or managed identity", "Username and password", "API keys only", "No authentication"],
        correctOptionIndex: 0,
        explanation: "Service principals and managed identities provide secure API access."
    },
    {
        id: "dp700-173",
        category: "DP-700",
        scenario: "You need to implement slowly changing dimension Type 3.",
        questionText: "What characterizes Type 3 SCD?",
        options: ["Previous value column alongside current value", "No history", "Full history table", "Separate tables"],
        correctOptionIndex: 0,
        explanation: "Type 3 stores previous value in additional column for limited history."
    },
    {
        id: "dp700-174",
        category: "DP-700",
        scenario: "Your pipeline needs to implement fan-out parallelism.",
        questionText: "Which activity enables parallel execution of multiple branches?",
        options: ["ForEach with sequential false or parallel branches", "Sequential execution only", "Single activity", "No parallelism"],
        correctOptionIndex: 0,
        explanation: "ForEach with batch count or parallel branches enables fan-out."
    },
    {
        id: "dp700-175",
        category: "DP-700",
        scenario: "You need to optimize Spark shuffle operations.",
        questionText: "Which configuration affects shuffle behavior?",
        options: ["spark.sql.shuffle.partitions", "spark.driver.memory only", "spark.executor.instances only", "No shuffle configuration"],
        correctOptionIndex: 0,
        explanation: "Shuffle partition count significantly impacts shuffle performance."
    },
    {
        id: "dp700-176",
        category: "DP-700",
        scenario: "Your semantic model performance degrades with many-to-many relationships.",
        questionText: "How should you handle many-to-many relationships?",
        options: ["Use bridge tables or DAX with CROSSFILTER", "Avoid many-to-many", "Direct many-to-many only", "Denormalize everything"],
        correctOptionIndex: 0,
        explanation: "Bridge tables and DAX control provide optimized many-to-many handling."
    },
    {
        id: "dp700-177",
        category: "DP-700",
        scenario: "You need to implement data profiling before migration.",
        questionText: "What statistics should data profiling capture?",
        options: ["Nulls, cardinality, patterns, min/max, distributions", "Row count only", "Column names only", "Data types only"],
        correctOptionIndex: 0,
        explanation: "Comprehensive profiling captures multiple data characteristics."
    },
    {
        id: "dp700-178",
        category: "DP-700",
        scenario: "Your Warehouse needs to support high-concurrency read workloads.",
        questionText: "Which design pattern optimizes for reads?",
        options: ["Denormalized star schema with aggregates", "Fully normalized 3NF", "EAV model", "Single flat table"],
        correctOptionIndex: 0,
        explanation: "Star schemas with aggregates optimize read performance."
    },
    {
        id: "dp700-179",
        category: "DP-700",
        scenario: "You need to implement event deduplication in Eventstream.",
        questionText: "Which approach handles duplicate events?",
        options: ["Unique key-based deduplication in destination", "Accept duplicates", "Source deduplication only", "No deduplication possible"],
        correctOptionIndex: 0,
        explanation: "Key-based deduplication at destination ensures data quality."
    },
    {
        id: "dp700-180",
        category: "DP-700",
        scenario: "Your pipeline needs to handle schema drift in source data.",
        questionText: "Which approach handles unexpected schema changes?",
        options: ["Schema drift tolerance with dynamic mapping", "Fail on schema change", "Hardcoded schema only", "Manual updates"],
        correctOptionIndex: 0,
        explanation: "Schema drift tolerance handles evolving source schemas gracefully."
    },
    {
        id: "dp700-181",
        category: "DP-700",
        scenario: "You need to implement a fact table with multiple grain levels.",
        questionText: "How should you handle mixed granularity?",
        options: ["Separate fact tables per grain or allocate to lowest grain", "Single mixed fact", "Ignore granularity", "Dimension-only design"],
        correctOptionIndex: 0,
        explanation: "Separate facts or lowest grain allocation prevents analysis confusion."
    },
    {
        id: "dp700-182",
        category: "DP-700",
        scenario: "Your Spark notebook needs to read data from Azure Blob Storage.",
        questionText: "Which authentication configuration is required?",
        options: ["Storage account key or SAS token in Spark configuration", "No authentication", "Username only", "Automatic access"],
        correctOptionIndex: 0,
        explanation: "External storage requires explicit authentication configuration."
    },
    {
        id: "dp700-183",
        category: "DP-700",
        scenario: "You need to implement query caching for improved performance.",
        questionText: "At which layer does caching provide most benefit?",
        options: ["Multiple layers: storage, query, semantic model", "Storage only", "Query only", "No caching benefit"],
        correctOptionIndex: 0,
        explanation: "Multi-layer caching provides cumulative performance benefits."
    },
    {
        id: "dp700-184",
        category: "DP-700",
        scenario: "Your data pipeline needs to implement exactly-once processing semantics.",
        questionText: "Which mechanisms ensure exactly-once processing?",
        options: ["Checkpointing with idempotent writes", "At-least-once only", "At-most-once only", "No guarantees possible"],
        correctOptionIndex: 0,
        explanation: "Checkpointing and idempotent operations achieve exactly-once semantics."
    },
    {
        id: "dp700-185",
        category: "DP-700",
        scenario: "You need to implement table maintenance automation.",
        questionText: "How can you automate OPTIMIZE and VACUUM?",
        options: ["Scheduled notebooks or pipelines running maintenance commands", "Manual execution only", "Automatic by Fabric", "External scheduler only"],
        correctOptionIndex: 0,
        explanation: "Scheduled jobs automate regular table maintenance."
    },
    {
        id: "dp700-186",
        category: "DP-700",
        scenario: "Your semantic model users need personalized default views.",
        questionText: "Which feature provides personalized experiences?",
        options: ["Perspectives in the semantic model", "Single view for all", "Separate models per user", "Report-level only"],
        correctOptionIndex: 0,
        explanation: "Perspectives provide customized views of the model per audience."
    },
    {
        id: "dp700-187",
        category: "DP-700",
        scenario: "You need to implement data quality monitoring over time.",
        questionText: "Which approach tracks quality trends?",
        options: ["Quality metrics captured in monitoring tables with historical tracking", "Point-in-time checks only", "No monitoring", "Manual review"],
        correctOptionIndex: 0,
        explanation: "Historical metrics enable trend analysis and regression detection."
    },
    {
        id: "dp700-188",
        category: "DP-700",
        scenario: "Your Warehouse needs to support both OLTP and OLAP patterns.",
        questionText: "Which configuration best supports mixed workloads?",
        options: ["Separate workloads to appropriate storage: Lakehouse for OLAP, transactional source for OLTP", "Single table for both", "OLTP design only", "OLAP design only"],
        correctOptionIndex: 0,
        explanation: "Separating workloads to optimized stores prevents conflicts."
    },
    {
        id: "dp700-189",
        category: "DP-700",
        scenario: "You need to implement aggregate navigation in your semantic model.",
        questionText: "Which feature enables automatic aggregate usage?",
        options: ["User-defined aggregations in Premium/Fabric", "Manual measure switching", "No aggregate navigation", "External aggregation"],
        correctOptionIndex: 0,
        explanation: "Premium features enable automatic aggregate table selection."
    },
    {
        id: "dp700-190",
        category: "DP-700",
        scenario: "Your pipeline needs to implement circuit breaker pattern for external APIs.",
        questionText: "What does the circuit breaker pattern do?",
        options: ["Stops calling failing services temporarily to prevent cascade failures", "Retry infinitely", "Ignore failures", "Immediate fail"],
        correctOptionIndex: 0,
        explanation: "Circuit breaker prevents repeated calls to failing services."
    },
    {
        id: "dp700-191",
        category: "DP-700",
        scenario: "You need to implement row-level security based on user hierarchy.",
        questionText: "How should you handle hierarchical security?",
        options: ["DAX with security table traversing hierarchy", "Flat user list only", "No hierarchy support", "Separate models"],
        correctOptionIndex: 0,
        explanation: "Hierarchical RLS uses DAX functions to traverse security hierarchies."
    },
    {
        id: "dp700-192",
        category: "DP-700",
        scenario: "Your Spark job partition strategy is causing data skew.",
        questionText: "How can you identify partition skew?",
        options: ["Spark UI task distribution analysis", "No visibility", "Log file review only", "Assume even distribution"],
        correctOptionIndex: 0,
        explanation: "Spark UI shows task duration variances indicating skew."
    },
    {
        id: "dp700-193",
        category: "DP-700",
        scenario: "You need to implement zero-copy data sharing across workspaces.",
        questionText: "Which feature enables this?",
        options: ["OneLake shortcuts", "Copy activities", "Data replication", "API sharing"],
        correctOptionIndex: 0,
        explanation: "Shortcuts provide zero-copy access to data in other locations."
    },
    {
        id: "dp700-194",
        category: "DP-700",
        scenario: "Your data mart needs surrogate key generation.",
        questionText: "Which approach generates unique surrogate keys?",
        options: ["Identity columns or monotonically_increasing_id in Spark", "Natural keys only", "Random GUIDs only", "No surrogate keys"],
        correctOptionIndex: 0,
        explanation: "Identity columns and Spark functions generate sequential surrogates."
    },
    {
        id: "dp700-195",
        category: "DP-700",
        scenario: "You need to implement data lake governance framework.",
        questionText: "What should the governance framework include?",
        options: ["Naming standards, access policies, data quality rules, lifecycle management", "Naming only", "Access only", "No governance needed"],
        correctOptionIndex: 0,
        explanation: "Comprehensive governance covers multiple aspects of data management."
    },
    {
        id: "dp700-196",
        category: "DP-700",
        scenario: "Your semantic model refresh is consuming excessive capacity.",
        questionText: "Which optimization reduces refresh capacity usage?",
        options: ["Incremental refresh with appropriate partitioning", "Larger capacity only", "More frequent refresh", "Full refresh always"],
        correctOptionIndex: 0,
        explanation: "Incremental refresh processes only changed data, saving capacity."
    },
    {
        id: "dp700-197",
        category: "DP-700",
        scenario: "You need to implement data observability for your pipelines.",
        questionText: "What should data observability provide?",
        options: ["Metrics, logs, traces, and alerts for pipeline health", "Metrics only", "Logs only", "No observability"],
        correctOptionIndex: 0,
        explanation: "Full observability includes multiple signal types for comprehensive monitoring."
    },
    {
        id: "dp700-198",
        category: "DP-700",
        scenario: "Your Warehouse queries need to handle high selectivity filters.",
        questionText: "Which index type best supports high selectivity filters?",
        options: ["Filtered indexes or nonclustered indexes on selective columns", "Heap scan", "Full scan always", "No indexing"],
        correctOptionIndex: 0,
        explanation: "Targeted indexes on selective columns improve filter performance."
    },
    {
        id: "dp700-199",
        category: "DP-700",
        scenario: "You need to implement event sourcing pattern in Fabric.",
        questionText: "How can event sourcing be implemented?",
        options: ["Append-only Delta tables with state reconstruction", "Mutable tables", "External event store", "Cannot implement"],
        correctOptionIndex: 0,
        explanation: "Append-only Delta tables can store events for state reconstruction."
    },
    {
        id: "dp700-200",
        category: "DP-700",
        scenario: "Your organization is planning Fabric adoption at enterprise scale.",
        questionText: "What is the first step in enterprise adoption?",
        options: ["Governance framework and capacity planning", "Maximum capacity purchase", "No planning needed", "Single workspace for all"],
        correctOptionIndex: 0,
        explanation: "Enterprise adoption requires governance and capacity strategy."
    }
];
