import { Question } from "./exam-questions";

export const sqlQuestions: Question[] = [
    {
        id: "sql-1",
        category: "SQL",
        questionText: "Which SQL clause filters results before grouping?",
        options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
        correctOptionIndex: 1,
        explanation: "WHERE filters rows before any grouping takes place."
    },
    {
        id: "sql-2",
        category: "SQL",
        questionText: "What is the difference between UNION and UNION ALL?",
        options: ["No difference", "UNION removes duplicates, UNION ALL keeps them", "UNION ALL removes duplicates", "UNION is faster"],
        correctOptionIndex: 1,
        explanation: "UNION performs distinct, UNION ALL concatenates all rows."
    },
    {
        id: "sql-3",
        category: "SQL",
        questionText: "Which window function assigns unique sequential numbers?",
        options: ["RANK()", "DENSE_RANK()", "ROW_NUMBER()", "NTILE()"],
        correctOptionIndex: 2,
        explanation: "ROW_NUMBER() assigns distinct sequential integers to each row."
    },
    {
        id: "sql-4",
        category: "SQL",
        questionText: "How do you select all columns from a table?",
        options: ["SELECT all FROM table", "SELECT * FROM table", "SELECT columns FROM table", "GET * FROM table"],
        correctOptionIndex: 1,
        explanation: "The asterisk (*) selects all columns."
    },
    {
        id: "sql-5",
        category: "SQL",
        questionText: "Which JOIN returns all rows from left table?",
        options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
        correctOptionIndex: 2,
        explanation: "LEFT JOIN returns all left table rows with matching right rows or NULL."
    },
    {
        id: "sql-6",
        category: "SQL",
        questionText: "What does GROUP BY do?",
        options: ["Sorts results", "Groups rows for aggregate functions", "Filters groups", "Joins tables"],
        correctOptionIndex: 1,
        explanation: "GROUP BY groups rows sharing values for aggregation."
    },
    {
        id: "sql-7",
        category: "SQL",
        questionText: "Which clause filters grouped results?",
        options: ["WHERE", "HAVING", "FILTER", "WHEN"],
        correctOptionIndex: 1,
        explanation: "HAVING filters groups after GROUP BY aggregation."
    },
    {
        id: "sql-8",
        category: "SQL",
        questionText: "What does DISTINCT do?",
        options: ["Counts rows", "Removes duplicate rows", "Sorts values", "Filters nulls"],
        correctOptionIndex: 1,
        explanation: "DISTINCT returns only unique rows from result set."
    },
    {
        id: "sql-9",
        category: "SQL",
        questionText: "How do you limit results to 10 rows in T-SQL?",
        options: ["LIMIT 10", "TOP 10", "FETCH 10", "FIRST 10"],
        correctOptionIndex: 1,
        explanation: "T-SQL uses TOP n to limit rows returned."
    },
    {
        id: "sql-10",
        category: "SQL",
        questionText: "What is a PRIMARY KEY constraint?",
        options: ["Allows duplicates", "Uniquely identifies each row", "Foreign table reference", "Default value"],
        correctOptionIndex: 1,
        explanation: "PRIMARY KEY ensures unique identification of each table row."
    },
    {
        id: "sql-11",
        category: "SQL",
        questionText: "What does COALESCE() return?",
        options: ["Sum of values", "First non-null value", "Count of nulls", "Last value"],
        correctOptionIndex: 1,
        explanation: "COALESCE returns the first non-null expression."
    },
    {
        id: "sql-12",
        category: "SQL",
        questionText: "Which function concatenates strings in SQL Server?",
        options: ["COMBINE()", "CONCAT()", "JOIN()", "MERGE()"],
        correctOptionIndex: 1,
        explanation: "CONCAT() joins multiple strings together."
    },
    {
        id: "sql-13",
        category: "SQL",
        questionText: "What is a subquery?",
        options: ["Table alias", "Query nested inside another query", "Stored procedure", "View definition"],
        correctOptionIndex: 1,
        explanation: "Subqueries are queries embedded within outer queries."
    },
    {
        id: "sql-14",
        category: "SQL",
        questionText: "Which join type returns all combinations of rows?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
        correctOptionIndex: 3,
        explanation: "CROSS JOIN produces Cartesian product of both tables."
    },
    {
        id: "sql-15",
        category: "SQL",
        questionText: "What does NULL represent in SQL?",
        options: ["Zero", "Empty string", "Unknown or missing value", "False"],
        correctOptionIndex: 2,
        explanation: "NULL represents absence of a value, not zero or empty."
    },
    {
        id: "sql-16",
        category: "SQL",
        questionText: "How do you check for NULL values?",
        options: ["column = NULL", "column IS NULL", "column == NULL", "ISNULL(column)"],
        correctOptionIndex: 1,
        explanation: "IS NULL is the correct way to check for null values."
    },
    {
        id: "sql-17",
        category: "SQL",
        questionText: "What does CASE expression do?",
        options: ["Changes case of text", "Conditional logic in queries", "Creates stored procedure", "Indexes columns"],
        correctOptionIndex: 1,
        explanation: "CASE provides if-then-else logic in SQL."
    },
    {
        id: "sql-18",
        category: "SQL",
        questionText: "Which function returns current date in SQL Server?",
        options: ["NOW()", "GETDATE()", "CURRENT()", "TODAY()"],
        correctOptionIndex: 1,
        explanation: "GETDATE() returns current date and time in SQL Server."
    },
    {
        id: "sql-19",
        category: "SQL",
        questionText: "What is an INDEX used for?",
        options: ["Data storage", "Faster data retrieval", "Data validation", "Table relationships"],
        correctOptionIndex: 1,
        explanation: "Indexes speed up data retrieval operations."
    },
    {
        id: "sql-20",
        category: "SQL",
        questionText: "What does DELETE FROM table do?",
        options: ["Drops the table", "Removes all rows", "Removes table structure", "Truncates table"],
        correctOptionIndex: 1,
        explanation: "DELETE removes rows from table, keeping structure."
    },
    {
        id: "sql-21",
        category: "SQL",
        questionText: "What is the difference between DELETE and TRUNCATE?",
        options: ["No difference", "DELETE is logged row-by-row, TRUNCATE is minimally logged", "TRUNCATE can have WHERE", "DELETE is faster"],
        correctOptionIndex: 1,
        explanation: "DELETE is fully logged; TRUNCATE is faster but less flexible."
    },
    {
        id: "sql-22",
        category: "SQL",
        questionText: "Which aggregate function counts non-null values?",
        options: ["SUM()", "COUNT(column)", "TOTAL()", "NUM()"],
        correctOptionIndex: 1,
        explanation: "COUNT(column) counts non-null values in the column."
    },
    {
        id: "sql-23",
        category: "SQL",
        questionText: "What does ORDER BY DESC do?",
        options: ["Ascending order", "Descending order", "Random order", "Grouped order"],
        correctOptionIndex: 1,
        explanation: "DESC sorts results in descending order."
    },
    {
        id: "sql-24",
        category: "SQL",
        questionText: "What is a FOREIGN KEY?",
        options: ["Primary table identifier", "Reference to another table's primary key", "Encryption key", "Index key"],
        correctOptionIndex: 1,
        explanation: "FOREIGN KEY creates relationship between tables."
    },
    {
        id: "sql-25",
        category: "SQL",
        questionText: "Which function rounds a number to specified decimals?",
        options: ["FLOOR()", "CEILING()", "ROUND()", "TRUNC()"],
        correctOptionIndex: 2,
        explanation: "ROUND() rounds to specified decimal places."
    },
    {
        id: "sql-26",
        category: "SQL",
        questionText: "What does RANK() do with ties?",
        options: ["Skips numbers after ties", "No gaps in ranking", "Errors on ties", "Ignores ties"],
        correctOptionIndex: 0,
        explanation: "RANK() creates gaps after ties (1,1,3 not 1,1,2)."
    },
    {
        id: "sql-27",
        category: "SQL",
        questionText: "What does DENSE_RANK() do with ties?",
        options: ["Skips numbers after ties", "No gaps in ranking", "Errors on ties", "Ignores ties"],
        correctOptionIndex: 1,
        explanation: "DENSE_RANK() has no gaps (1,1,2 not 1,1,3)."
    },
    {
        id: "sql-28",
        category: "SQL",
        questionText: "What is a CTE (Common Table Expression)?",
        options: ["Permanent table", "Temporary named result set", "Stored procedure", "View type"],
        correctOptionIndex: 1,
        explanation: "CTE is a temporary result set defined with WITH clause."
    },
    {
        id: "sql-29",
        category: "SQL",
        questionText: "How do you define a CTE?",
        options: ["CREATE CTE", "WITH cte_name AS (...)", "DEFINE CTE", "TEMP TABLE"],
        correctOptionIndex: 1,
        explanation: "WITH clause defines Common Table Expressions."
    },
    {
        id: "sql-30",
        category: "SQL",
        questionText: "What does LAG() window function return?",
        options: ["Next row value", "Previous row value", "First row value", "Last row value"],
        correctOptionIndex: 1,
        explanation: "LAG() accesses value from previous row."
    },
    {
        id: "sql-31",
        category: "SQL",
        questionText: "What does LEAD() window function return?",
        options: ["Next row value", "Previous row value", "First row value", "Last row value"],
        correctOptionIndex: 0,
        explanation: "LEAD() accesses value from next row."
    },
    {
        id: "sql-32",
        category: "SQL",
        questionText: "What is the purpose of PARTITION BY in window functions?",
        options: ["Creates partitions for storage", "Divides rows into groups for function", "Filters rows", "Joins tables"],
        correctOptionIndex: 1,
        explanation: "PARTITION BY creates groups for window function calculation."
    },
    {
        id: "sql-33",
        category: "SQL",
        questionText: "What does SUM() OVER (ORDER BY date) calculate?",
        options: ["Total sum", "Running sum", "Average", "Count"],
        correctOptionIndex: 1,
        explanation: "ORDER BY in window creates running (cumulative) sum."
    },
    {
        id: "sql-34",
        category: "SQL",
        questionText: "What does FIRST_VALUE() return?",
        options: ["First value in partition", "Last value", "Minimum value", "Most common value"],
        correctOptionIndex: 0,
        explanation: "FIRST_VALUE() returns first value in the window frame."
    },
    {
        id: "sql-35",
        category: "SQL",
        questionText: "What does LAST_VALUE() return?",
        options: ["First value in partition", "Last value in frame", "Maximum value", "Most recent value"],
        correctOptionIndex: 1,
        explanation: "LAST_VALUE() returns last value in the window frame."
    },
    {
        id: "sql-36",
        category: "SQL",
        questionText: "What is a VIEW in SQL?",
        options: ["Physical table copy", "Virtual table based on query", "Stored procedure", "Trigger"],
        correctOptionIndex: 1,
        explanation: "VIEW is a virtual table defined by a SELECT query."
    },
    {
        id: "sql-37",
        category: "SQL",
        questionText: "What does EXISTS() check?",
        options: ["Table existence", "Whether subquery returns any rows", "Column null status", "Index presence"],
        correctOptionIndex: 1,
        explanation: "EXISTS returns true if subquery returns at least one row."
    },
    {
        id: "sql-38",
        category: "SQL",
        questionText: "What is the syntax for INSERT with multiple values?",
        options: ["INSERT INTO table VALUES (1), (2), (3)", "INSERT INTO table (1, 2, 3)", "INSERT table VALUES 1, 2, 3", "INSERT INTO table SET (1), (2), (3)"],
        correctOptionIndex: 0,
        explanation: "Multiple value sets can be inserted with comma separation."
    },
    {
        id: "sql-39",
        category: "SQL",
        questionText: "What does BETWEEN operator do?",
        options: ["Exclusive range", "Inclusive range comparison", "Greater than comparison", "Not equal comparison"],
        correctOptionIndex: 1,
        explanation: "BETWEEN is inclusive of both boundary values."
    },
    {
        id: "sql-40",
        category: "SQL",
        questionText: "What does IN operator do?",
        options: ["Checks if value is in a list", "Joins tables", "Creates subquery", "Filters nulls"],
        correctOptionIndex: 0,
        explanation: "IN checks if value matches any value in list."
    },
    {
        id: "sql-41",
        category: "SQL",
        questionText: "What is a self-join?",
        options: ["Join with same table", "Join with all tables", "Inner join only", "Outer join only"],
        correctOptionIndex: 0,
        explanation: "Self-join joins a table to itself using aliases."
    },
    {
        id: "sql-42",
        category: "SQL",
        questionText: "What does CAST() function do?",
        options: ["Creates new table", "Converts data type", "Aggregates values", "Filters data"],
        correctOptionIndex: 1,
        explanation: "CAST converts expression to specified data type."
    },
    {
        id: "sql-43",
        category: "SQL",
        questionText: "What does CONVERT() function do in SQL Server?",
        options: ["Creates new table", "Converts data type with style options", "Joins tables", "Filters data"],
        correctOptionIndex: 1,
        explanation: "CONVERT provides more formatting options than CAST."
    },
    {
        id: "sql-44",
        category: "SQL",
        questionText: "What is a correlated subquery?",
        options: ["Independent subquery", "Subquery referencing outer query", "Stored procedure", "View definition"],
        correctOptionIndex: 1,
        explanation: "Correlated subquery references columns from outer query."
    },
    {
        id: "sql-45",
        category: "SQL",
        questionText: "What does MERGE statement do?",
        options: ["Joins tables", "Combines INSERT, UPDATE, DELETE operations", "Creates views", "Drops tables"],
        correctOptionIndex: 1,
        explanation: "MERGE performs upsert operations based on matching."
    },
    {
        id: "sql-46",
        category: "SQL",
        questionText: "What is an IDENTITY column?",
        options: ["Primary key only", "Auto-incrementing column", "Unique constraint", "Foreign key"],
        correctOptionIndex: 1,
        explanation: "IDENTITY automatically generates sequential values."
    },
    {
        id: "sql-47",
        category: "SQL",
        questionText: "What does @@ROWCOUNT return?",
        options: ["Total table rows", "Rows affected by last statement", "Column count", "Index count"],
        correctOptionIndex: 1,
        explanation: "@@ROWCOUNT returns rows affected by previous statement."
    },
    {
        id: "sql-48",
        category: "SQL",
        questionText: "What does @@IDENTITY return?",
        options: ["Current user", "Last identity value inserted", "Row count", "Transaction ID"],
        correctOptionIndex: 1,
        explanation: "@@IDENTITY returns last identity value generated."
    },
    {
        id: "sql-49",
        category: "SQL",
        questionText: "What is SCOPE_IDENTITY() used for?",
        options: ["Gets scope name", "Last identity in current scope", "Session identifier", "Transaction scope"],
        correctOptionIndex: 1,
        explanation: "SCOPE_IDENTITY is safer than @@IDENTITY for identity values."
    },
    {
        id: "sql-50",
        category: "SQL",
        questionText: "What does NULLIF() return?",
        options: ["Always NULL", "NULL if arguments equal, else first argument", "First non-null", "Count of nulls"],
        correctOptionIndex: 1,
        explanation: "NULLIF returns NULL if both arguments are equal."
    },
    {
        id: "sql-51",
        category: "SQL",
        questionText: "What is the purpose of ISNULL() in SQL Server?",
        options: ["Checks for NULL", "Replaces NULL with specified value", "Returns boolean", "Counts nulls"],
        correctOptionIndex: 1,
        explanation: "ISNULL replaces NULL with a replacement value."
    },
    {
        id: "sql-52",
        category: "SQL",
        questionText: "What does NTILE(4) do?",
        options: ["Splits into 4 random groups", "Divides rows into 4 equal groups", "Returns 4th value", "Filters to 4 rows"],
        correctOptionIndex: 1,
        explanation: "NTILE divides rows into specified number of groups."
    },
    {
        id: "sql-53",
        category: "SQL",
        questionText: "What is a stored procedure?",
        options: ["Saved query only", "Precompiled SQL code block", "Table type", "Index type"],
        correctOptionIndex: 1,
        explanation: "Stored procedures are compiled, reusable SQL code blocks."
    },
    {
        id: "sql-54",
        category: "SQL",
        questionText: "What is a trigger?",
        options: ["Scheduled job", "Automatic action on data changes", "Index type", "Constraint type"],
        correctOptionIndex: 1,
        explanation: "Triggers automatically execute on INSERT, UPDATE, or DELETE."
    },
    {
        id: "sql-55",
        category: "SQL",
        questionText: "What does PIVOT do?",
        options: ["Rotates rows to columns", "Rotates columns to rows", "Joins tables", "Filters data"],
        correctOptionIndex: 0,
        explanation: "PIVOT transforms row values into column headers."
    },
    {
        id: "sql-56",
        category: "SQL",
        questionText: "What does UNPIVOT do?",
        options: ["Rotates rows to columns", "Rotates columns to rows", "Joins tables", "Filters data"],
        correctOptionIndex: 1,
        explanation: "UNPIVOT transforms columns into row values."
    },
    {
        id: "sql-57",
        category: "SQL",
        questionText: "What is a computed column?",
        options: ["Aggregated column", "Column calculated from other columns", "Index column", "Primary key"],
        correctOptionIndex: 1,
        explanation: "Computed columns are derived from expressions using other columns."
    },
    {
        id: "sql-58",
        category: "SQL",
        questionText: "What does STRING_AGG() do?",
        options: ["Splits strings", "Concatenates values with delimiter", "Counts strings", "Compares strings"],
        correctOptionIndex: 1,
        explanation: "STRING_AGG concatenates column values with separator."
    },
    {
        id: "sql-59",
        category: "SQL",
        questionText: "What does STUFF() function do?",
        options: ["Formats string", "Replaces part of string", "Splits string", "Trims string"],
        correctOptionIndex: 1,
        explanation: "STUFF deletes and inserts characters in a string."
    },
    {
        id: "sql-60",
        category: "SQL",
        questionText: "What does CHARINDEX() return?",
        options: ["Character count", "Position of substring", "ASCII value", "String length"],
        correctOptionIndex: 1,
        explanation: "CHARINDEX returns starting position of substring."
    },
    {
        id: "sql-61",
        category: "SQL",
        questionText: "What does SUBSTRING() do?",
        options: ["Finds substring", "Extracts part of string", "Replaces substring", "Counts substrings"],
        correctOptionIndex: 1,
        explanation: "SUBSTRING extracts portion of string from specified position."
    },
    {
        id: "sql-62",
        category: "SQL",
        questionText: "What is a clustered index?",
        options: ["Multiple indexes", "Determines physical row order", "Non-unique index", "Covering index"],
        correctOptionIndex: 1,
        explanation: "Clustered index sorts and stores data rows in order."
    },
    {
        id: "sql-63",
        category: "SQL",
        questionText: "How many clustered indexes can a table have?",
        options: ["Unlimited", "One", "Two", "None required"],
        correctOptionIndex: 1,
        explanation: "A table can have only one clustered index."
    },
    {
        id: "sql-64",
        category: "SQL",
        questionText: "What is a non-clustered index?",
        options: ["Physical row order", "Separate structure pointing to data", "Primary key index", "Unique index only"],
        correctOptionIndex: 1,
        explanation: "Non-clustered indexes store pointers to data rows."
    },
    {
        id: "sql-65",
        category: "SQL",
        questionText: "What is a covering index?",
        options: ["Index on all columns", "Index containing all query columns", "Clustered index", "Filtered index"],
        correctOptionIndex: 1,
        explanation: "Covering index includes all columns needed by a query."
    },
    {
        id: "sql-66",
        category: "SQL",
        questionText: "What does OFFSET-FETCH do?",
        options: ["Creates offset table", "Implements pagination", "Joins tables", "Filters nulls"],
        correctOptionIndex: 1,
        explanation: "OFFSET-FETCH skips rows and limits result for paging."
    },
    {
        id: "sql-67",
        category: "SQL",
        questionText: "What is the correct OFFSET-FETCH syntax?",
        options: ["OFFSET 10 FETCH 5", "OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY", "SKIP 10 TAKE 5", "LIMIT 5 OFFSET 10"],
        correctOptionIndex: 1,
        explanation: "T-SQL uses OFFSET...ROWS FETCH NEXT...ROWS ONLY syntax."
    },
    {
        id: "sql-68",
        category: "SQL",
        questionText: "What does APPLY operator do?",
        options: ["Joins tables", "Invokes table-valued function for each row", "Filters data", "Aggregates data"],
        correctOptionIndex: 1,
        explanation: "APPLY evaluates a function for each row from outer table."
    },
    {
        id: "sql-69",
        category: "SQL",
        questionText: "What is the difference between CROSS APPLY and OUTER APPLY?",
        options: ["No difference", "OUTER APPLY includes rows with no matches", "CROSS APPLY is faster", "OUTER APPLY joins more tables"],
        correctOptionIndex: 1,
        explanation: "OUTER APPLY returns rows even when function returns nothing."
    },
    {
        id: "sql-70",
        category: "SQL",
        questionText: "What is a temp table in SQL Server?",
        options: ["Permanent table", "Session-scoped temporary table", "View", "CTE"],
        correctOptionIndex: 1,
        explanation: "Temp tables (#table) exist for the session duration."
    },
    {
        id: "sql-71",
        category: "SQL",
        questionText: "How do you create a temp table?",
        options: ["CREATE TEMP table", "CREATE TABLE #temp", "TEMP CREATE table", "CREATE ##temp"],
        correctOptionIndex: 1,
        explanation: "Single # creates local temp table visible in session."
    },
    {
        id: "sql-72",
        category: "SQL",
        questionText: "What does ## prefix indicate for temp tables?",
        options: ["Local temp table", "Global temp table", "Permanent table", "System table"],
        correctOptionIndex: 1,
        explanation: "## creates global temp table visible to all sessions."
    },
    {
        id: "sql-73",
        category: "SQL",
        questionText: "What is a table variable?",
        options: ["Temp table", "Variable holding table-like data", "View", "Cursor"],
        correctOptionIndex: 1,
        explanation: "Table variables (@table) store tabular data in memory."
    },
    {
        id: "sql-74",
        category: "SQL",
        questionText: "What does TRY_CAST() do differently than CAST()?",
        options: ["Faster casting", "Returns NULL on failure instead of error", "More data types", "No difference"],
        correctOptionIndex: 1,
        explanation: "TRY_CAST returns NULL if conversion fails."
    },
    {
        id: "sql-75",
        category: "SQL",
        questionText: "What does TRY_CONVERT() do?",
        options: ["Faster conversion", "Returns NULL on failure instead of error", "More formats", "No difference from CONVERT"],
        correctOptionIndex: 1,
        explanation: "TRY_CONVERT returns NULL instead of raising error on failure."
    },
    {
        id: "sql-76",
        category: "SQL",
        questionText: "What is the purpose of SET NOCOUNT ON?",
        options: ["Disables counting", "Prevents 'rows affected' messages", "Limits results", "Enables statistics"],
        correctOptionIndex: 1,
        explanation: "SET NOCOUNT ON suppresses row count messages."
    },
    {
        id: "sql-77",
        category: "SQL",
        questionText: "What does BEGIN TRANSACTION do?",
        options: ["Ends transaction", "Starts explicit transaction", "Commits changes", "Rolls back changes"],
        correctOptionIndex: 1,
        explanation: "BEGIN TRANSACTION starts an explicit transaction."
    },
    {
        id: "sql-78",
        category: "SQL",
        questionText: "What does COMMIT do?",
        options: ["Starts transaction", "Permanently saves transaction changes", "Undoes changes", "Pauses transaction"],
        correctOptionIndex: 1,
        explanation: "COMMIT saves all changes made in the transaction."
    },
    {
        id: "sql-79",
        category: "SQL",
        questionText: "What does ROLLBACK do?",
        options: ["Starts transaction", "Saves changes", "Undoes all transaction changes", "Pauses transaction"],
        correctOptionIndex: 2,
        explanation: "ROLLBACK undoes all changes since BEGIN TRANSACTION."
    },
    {
        id: "sql-80",
        category: "SQL",
        questionText: "What is a savepoint?",
        options: ["Transaction start", "Checkpoint within transaction for partial rollback", "Transaction end", "Full backup"],
        correctOptionIndex: 1,
        explanation: "SAVEPOINT allows partial rollback within a transaction."
    },
    {
        id: "sql-81",
        category: "SQL",
        questionText: "What does DATEDIFF() calculate?",
        options: ["Date format", "Difference between two dates", "Current date", "Date addition"],
        correctOptionIndex: 1,
        explanation: "DATEDIFF returns interval difference between dates."
    },
    {
        id: "sql-82",
        category: "SQL",
        questionText: "What does DATEADD() do?",
        options: ["Subtracts dates", "Adds interval to date", "Formats date", "Compares dates"],
        correctOptionIndex: 1,
        explanation: "DATEADD adds specified interval to a date."
    },
    {
        id: "sql-83",
        category: "SQL",
        questionText: "What does YEAR() function extract?",
        options: ["Full date", "Year portion of date", "Current year", "Year difference"],
        correctOptionIndex: 1,
        explanation: "YEAR extracts year component from date."
    },
    {
        id: "sql-84",
        category: "SQL",
        questionText: "What does FORMAT() function do?",
        options: ["Converts type", "Formats value as string with pattern", "Parses string", "Validates format"],
        correctOptionIndex: 1,
        explanation: "FORMAT converts values to formatted strings."
    },
    {
        id: "sql-85",
        category: "SQL",
        questionText: "What is an execution plan?",
        options: ["Query schedule", "How SQL Server executes a query", "Backup plan", "Recovery plan"],
        correctOptionIndex: 1,
        explanation: "Execution plan shows the steps SQL Server takes."
    },
    {
        id: "sql-86",
        category: "SQL",
        questionText: "What does a Table Scan indicate?",
        options: ["Optimal query", "Reading entire table (potential optimization needed)", "Index usage", "Fast query"],
        correctOptionIndex: 1,
        explanation: "Table scans often indicate missing or unused indexes."
    },
    {
        id: "sql-87",
        category: "SQL",
        questionText: "What is an Index Seek?",
        options: ["Full table read", "Targeted index lookup (efficient)", "Index creation", "Index deletion"],
        correctOptionIndex: 1,
        explanation: "Index seek efficiently finds specific rows using index."
    },
    {
        id: "sql-88",
        category: "SQL",
        questionText: "What does PERCENT_RANK() calculate?",
        options: ["Absolute rank", "Relative rank as percentage", "Percentile value", "Row count percentage"],
        correctOptionIndex: 1,
        explanation: "PERCENT_RANK calculates relative rank from 0 to 1."
    },
    {
        id: "sql-89",
        category: "SQL",
        questionText: "What does CUME_DIST() return?",
        options: ["Cumulative sum", "Cumulative distribution (percentage of values <= current)", "Distance function", "Count distribution"],
        correctOptionIndex: 1,
        explanation: "CUME_DIST returns cumulative distribution of a value."
    },
    {
        id: "sql-90",
        category: "SQL",
        questionText: "What is query parameterization?",
        options: ["Query caching", "Using variables instead of literals", "Query encryption", "Query optimization"],
        correctOptionIndex: 1,
        explanation: "Parameterization uses variables to prevent SQL injection and improve plan reuse."
    },
    {
        id: "sql-91",
        category: "SQL",
        questionText: "What is SQL injection?",
        options: ["Database backup", "Malicious code in query inputs", "Data encryption", "Performance tuning"],
        correctOptionIndex: 1,
        explanation: "SQL injection attacks insert malicious SQL through inputs."
    },
    {
        id: "sql-92",
        category: "SQL",
        questionText: "How do you prevent SQL injection?",
        options: ["Use dynamic SQL", "Use parameterized queries", "Disable queries", "Remove inputs"],
        correctOptionIndex: 1,
        explanation: "Parameterized queries prevent injection attacks."
    },
    {
        id: "sql-93",
        category: "SQL",
        questionText: "What does QUOTENAME() do?",
        options: ["Adds quotes to string", "Adds brackets for safe identifier usage", "Removes quotes", "Validates names"],
        correctOptionIndex: 1,
        explanation: "QUOTENAME adds delimiters for safe dynamic SQL."
    },
    {
        id: "sql-94",
        category: "SQL",
        questionText: "What is a recursive CTE?",
        options: ["CTE referencing another CTE", "CTE referencing itself", "Nested subquery", "Stored procedure"],
        correctOptionIndex: 1,
        explanation: "Recursive CTEs have anchor and recursive members."
    },
    {
        id: "sql-95",
        category: "SQL",
        questionText: "What is the maximum recursion depth default in SQL Server?",
        options: ["10", "100", "1000", "Unlimited"],
        correctOptionIndex: 1,
        explanation: "Default MAXRECURSION is 100; can be changed with OPTION."
    },
    {
        id: "sql-96",
        category: "SQL",
        questionText: "What does IIF() function do?",
        options: ["Checks if null", "Inline IF-ELSE expression", "Integer function", "Index function"],
        correctOptionIndex: 1,
        explanation: "IIF is shorthand for simple CASE WHEN conditions."
    },
    {
        id: "sql-97",
        category: "SQL",
        questionText: "What does CHOOSE() function do?",
        options: ["Random selection", "Returns value at specified index position", "Filters values", "Sorts values"],
        correctOptionIndex: 1,
        explanation: "CHOOSE returns item at 1-based index from list."
    },
    {
        id: "sql-98",
        category: "SQL",
        questionText: "What is a filtered index?",
        options: ["Index on all rows", "Index on subset of rows matching condition", "Compressed index", "Unique index"],
        correctOptionIndex: 1,
        explanation: "Filtered indexes include only rows matching WHERE clause."
    },
    {
        id: "sql-99",
        category: "SQL",
        questionText: "What is index fragmentation?",
        options: ["Missing index", "Logical page order differs from physical order", "Index corruption", "Index duplication"],
        correctOptionIndex: 1,
        explanation: "Fragmentation occurs when page order becomes disordered."
    },
    {
        id: "sql-100",
        category: "SQL",
        questionText: "How do you reduce index fragmentation?",
        options: ["Drop index", "REBUILD or REORGANIZE index", "Add more indexes", "Ignore it"],
        correctOptionIndex: 1,
        explanation: "REBUILD or REORGANIZE fixes index fragmentation."
    }
];
