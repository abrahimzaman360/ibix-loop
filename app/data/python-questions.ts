import { Question } from "./exam-questions";

export const pythonQuestions: Question[] = [
    {
        id: "py-1",
        category: "Python",
        questionText: "What is the output of: print([x for x in range(5) if x % 2 == 0])?",
        options: ["[1, 3, 5]", "[0, 2, 4]", "[0, 1, 2, 3, 4]", "[2, 4]"],
        correctOptionIndex: 1,
        explanation: "range(5) generates 0-4. The condition filters for even numbers: 0, 2, 4."
    },
    {
        id: "py-2",
        category: "Python",
        questionText: "Which data type is immutable in Python?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        correctOptionIndex: 3,
        explanation: "Tuples are immutable - once created, their elements cannot be changed."
    },
    {
        id: "py-3",
        category: "Python",
        questionText: "What does the lambda keyword create?",
        options: ["A class", "An anonymous function", "A module", "A loop"],
        correctOptionIndex: 1,
        explanation: "lambda creates small anonymous functions at runtime."
    },
    {
        id: "py-4",
        category: "Python",
        questionText: "How do you handle exceptions in Python?",
        options: ["if/else", "try/except", "switch/case", "for/while"],
        correctOptionIndex: 1,
        explanation: "try/except blocks handle exceptions and prevent program crashes."
    },
    {
        id: "py-5",
        category: "Python",
        questionText: "What is the purpose of __init__ in a class?",
        options: ["Destructor method", "Constructor method", "Static method", "Class method"],
        correctOptionIndex: 1,
        explanation: "__init__ initializes new instances of a class."
    },
    {
        id: "py-6",
        category: "Python",
        questionText: "Which library is primarily used for data manipulation in Python?",
        options: ["NumPy", "Pandas", "Matplotlib", "Requests"],
        correctOptionIndex: 1,
        explanation: "Pandas provides DataFrames for structured data manipulation."
    },
    {
        id: "py-7",
        category: "Python",
        questionText: "What does df.fillna(0) do in Pandas?",
        options: ["Drops null values", "Replaces null values with 0", "Filters null values", "Counts null values"],
        correctOptionIndex: 1,
        explanation: "fillna() replaces NaN/None values with the specified value."
    },
    {
        id: "py-8",
        category: "Python",
        questionText: "How do you read a CSV file using Pandas?",
        options: ["pd.load_csv()", "pd.read_csv()", "pd.csv_read()", "pd.import_csv()"],
        correctOptionIndex: 1,
        explanation: "pd.read_csv() is the standard function for reading CSV files."
    },
    {
        id: "py-9",
        category: "Python",
        questionText: "What is the difference between = and == in Python?",
        options: ["Both are assignment", "= assigns, == compares", "= compares, == assigns", "No difference"],
        correctOptionIndex: 1,
        explanation: "= is assignment operator; == is equality comparison operator."
    },
    {
        id: "py-10",
        category: "Python",
        questionText: "What does len() return for a dictionary?",
        options: ["Total values", "Number of key-value pairs", "Memory size", "Sum of values"],
        correctOptionIndex: 1,
        explanation: "len() returns the count of key-value pairs in a dictionary."
    },
    {
        id: "py-11",
        category: "Python",
        questionText: "How do you combine two lists in Python?",
        options: ["list1.add(list2)", "list1 + list2", "list1.merge(list2)", "combine(list1, list2)"],
        correctOptionIndex: 1,
        explanation: "The + operator concatenates lists in Python."
    },
    {
        id: "py-12",
        category: "Python",
        questionText: "What is a Python decorator?",
        options: ["Class attribute", "Function modifier", "Variable type", "Loop construct"],
        correctOptionIndex: 1,
        explanation: "Decorators modify the behavior of functions using @syntax."
    },
    {
        id: "py-13",
        category: "Python",
        questionText: "What does dict.get('key', default) return if 'key' doesn't exist?",
        options: ["KeyError", "None", "The default value", "Empty string"],
        correctOptionIndex: 2,
        explanation: "get() returns the default value instead of raising KeyError."
    },
    {
        id: "py-14",
        category: "Python",
        questionText: "How do you create a virtual environment?",
        options: ["python -m venv myenv", "python create env", "pip install venv", "virtualenv --create"],
        correctOptionIndex: 0,
        explanation: "python -m venv creates an isolated Python environment."
    },
    {
        id: "py-15",
        category: "Python",
        questionText: "What is the output of: print(type([]))?",
        options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'set'>"],
        correctOptionIndex: 1,
        explanation: "[] creates an empty list in Python."
    },
    {
        id: "py-16",
        category: "Python",
        questionText: "How do you filter rows in a Pandas DataFrame where column 'age' > 30?",
        options: ["df.filter(age > 30)", "df[df['age'] > 30]", "df.where('age', 30)", "df.select(age > 30)"],
        correctOptionIndex: 1,
        explanation: "Boolean indexing df[condition] filters rows in Pandas."
    },
    {
        id: "py-17",
        category: "Python",
        questionText: "What does df.groupby('category').sum() do?",
        options: ["Counts categories", "Groups by category and sums numeric columns", "Filters by category", "Sorts by category"],
        correctOptionIndex: 1,
        explanation: "groupby().sum() groups data and calculates sum per group."
    },
    {
        id: "py-18",
        category: "Python",
        questionText: "What is the purpose of *args in function definition?",
        options: ["Keyword arguments", "Variable positional arguments", "Default arguments", "Required arguments"],
        correctOptionIndex: 1,
        explanation: "*args allows passing a variable number of positional arguments."
    },
    {
        id: "py-19",
        category: "Python",
        questionText: "What is the purpose of **kwargs in function definition?",
        options: ["Positional arguments", "Variable keyword arguments", "Default arguments", "Required arguments"],
        correctOptionIndex: 1,
        explanation: "**kwargs allows passing a variable number of keyword arguments."
    },
    {
        id: "py-20",
        category: "Python",
        questionText: "How do you join two DataFrames on a common column?",
        options: ["df1.combine(df2)", "df1.merge(df2, on='column')", "df1 + df2", "df1.append(df2)"],
        correctOptionIndex: 1,
        explanation: "merge() joins DataFrames on specified columns, similar to SQL JOIN."
    },
    {
        id: "py-21",
        category: "Python",
        questionText: "What does df.isnull().sum() return?",
        options: ["Boolean DataFrame", "Count of null values per column", "Total nulls in DataFrame", "List of null columns"],
        correctOptionIndex: 1,
        explanation: "isnull().sum() counts null values in each column."
    },
    {
        id: "py-22",
        category: "Python",
        questionText: "What is list slicing syntax for getting every other element?",
        options: ["list[0:2]", "list[::2]", "list[1:1]", "list[2:]"],
        correctOptionIndex: 1,
        explanation: "[::2] uses step parameter to get every second element."
    },
    {
        id: "py-23",
        category: "Python",
        questionText: "How do you convert a list to a set?",
        options: ["list.toset()", "set(list)", "list.set()", "{list}"],
        correctOptionIndex: 1,
        explanation: "set() constructor converts iterables to sets."
    },
    {
        id: "py-24",
        category: "Python",
        questionText: "What does df.drop_duplicates() do?",
        options: ["Drops all rows", "Removes duplicate rows", "Drops null values", "Removes columns"],
        correctOptionIndex: 1,
        explanation: "drop_duplicates() removes rows with identical values."
    },
    {
        id: "py-25",
        category: "Python",
        questionText: "How do you rename columns in Pandas?",
        options: ["df.rename(columns={'old': 'new'})", "df.columns = 'new'", "df.change('old', 'new')", "df.replace_columns()"],
        correctOptionIndex: 0,
        explanation: "rename() with columns dictionary changes column names."
    },
    {
        id: "py-26",
        category: "Python",
        questionText: "What is the output of: 'hello'.upper()?",
        options: ["'hello'", "'HELLO'", "'Hello'", "Error"],
        correctOptionIndex: 1,
        explanation: "upper() converts all characters to uppercase."
    },
    {
        id: "py-27",
        category: "Python",
        questionText: "How do you add an element to the end of a list?",
        options: ["list.add(elem)", "list.append(elem)", "list.insert(elem)", "list.push(elem)"],
        correctOptionIndex: 1,
        explanation: "append() adds an element to the end of a list."
    },
    {
        id: "py-28",
        category: "Python",
        questionText: "What does df.pivot_table() do?",
        options: ["Transposes DataFrame", "Creates pivot table with aggregations", "Filters data", "Sorts data"],
        correctOptionIndex: 1,
        explanation: "pivot_table() creates aggregated summary tables."
    },
    {
        id: "py-29",
        category: "Python",
        questionText: "How do you check if key exists in dictionary?",
        options: ["dict.has(key)", "key in dict", "dict.exists(key)", "dict.contains(key)"],
        correctOptionIndex: 1,
        explanation: "'in' operator checks for key existence in dictionaries."
    },
    {
        id: "py-30",
        category: "Python",
        questionText: "What is NumPy primarily used for?",
        options: ["Web development", "Numerical computing with arrays", "Database operations", "GUI development"],
        correctOptionIndex: 1,
        explanation: "NumPy provides efficient multi-dimensional array operations."
    },
    {
        id: "py-31",
        category: "Python",
        questionText: "How do you create a NumPy array from a list?",
        options: ["np.list([1,2,3])", "np.array([1,2,3])", "np.from_list([1,2,3])", "np.create([1,2,3])"],
        correctOptionIndex: 1,
        explanation: "np.array() converts Python lists to NumPy arrays."
    },
    {
        id: "py-32",
        category: "Python",
        questionText: "What does df.describe() return?",
        options: ["Data types", "Statistical summary of numeric columns", "First 5 rows", "Column names"],
        correctOptionIndex: 1,
        explanation: "describe() provides count, mean, std, min, max, and quartiles."
    },
    {
        id: "py-33",
        category: "Python",
        questionText: "How do you sort a DataFrame by column 'date' descending?",
        options: ["df.sort('date', desc=True)", "df.sort_values('date', ascending=False)", "df.order_by('date')", "df.arrange('date', 'desc')"],
        correctOptionIndex: 1,
        explanation: "sort_values() with ascending=False sorts in descending order."
    },
    {
        id: "py-34",
        category: "Python",
        questionText: "What is the correct syntax for f-string formatting?",
        options: ["'Hello {name}'.format(name)", "f'Hello {name}'", "'Hello %s' % name", "'Hello ' + name"],
        correctOptionIndex: 1,
        explanation: "f-strings use f'...' prefix for inline variable interpolation."
    },
    {
        id: "py-35",
        category: "Python",
        questionText: "What does zip(list1, list2) return?",
        options: ["Merged list", "Iterator of tuples pairing elements", "Dictionary", "Set of values"],
        correctOptionIndex: 1,
        explanation: "zip() pairs elements from iterables into tuples."
    },
    {
        id: "py-36",
        category: "Python",
        questionText: "How do you apply a function to each element in a DataFrame column?",
        options: ["df['col'].foreach(func)", "df['col'].apply(func)", "df['col'].map_func(func)", "df['col'].run(func)"],
        correctOptionIndex: 1,
        explanation: "apply() applies a function to each element in a Series."
    },
    {
        id: "py-37",
        category: "Python",
        questionText: "What is the difference between list.append() and list.extend()?",
        options: ["No difference", "append adds element, extend adds iterable elements", "extend adds element, append adds iterable", "Both add iterables"],
        correctOptionIndex: 1,
        explanation: "append adds single item; extend adds all items from an iterable."
    },
    {
        id: "py-38",
        category: "Python",
        questionText: "How do you read JSON data in Python?",
        options: ["json.parse()", "json.load() or json.loads()", "json.read()", "json.decode()"],
        correctOptionIndex: 1,
        explanation: "json.load() reads from file; json.loads() parses string."
    },
    {
        id: "py-39",
        category: "Python",
        questionText: "What is a generator in Python?",
        options: ["Class factory", "Function that yields values lazily", "List comprehension", "Static method"],
        correctOptionIndex: 1,
        explanation: "Generators use yield to produce values one at a time."
    },
    {
        id: "py-40",
        category: "Python",
        questionText: "What does df.reset_index() do?",
        options: ["Deletes index", "Converts index to column", "Sorts by index", "Sets new index"],
        correctOptionIndex: 1,
        explanation: "reset_index() moves index to column and creates new integer index."
    },
    {
        id: "py-41",
        category: "Python",
        questionText: "How do you create a dictionary comprehension?",
        options: ["{key: value for key, value in items}", "[key: value for items]", "{key, value for items}", "dict(key, value for items)"],
        correctOptionIndex: 0,
        explanation: "Dictionary comprehensions use {key: value for ... in ...} syntax."
    },
    {
        id: "py-42",
        category: "Python",
        questionText: "What does df.melt() do?",
        options: ["Deletes columns", "Unpivots DataFrame from wide to long format", "Pivots DataFrame", "Merges DataFrames"],
        correctOptionIndex: 1,
        explanation: "melt() transforms wide format to long format (unpivoting)."
    },
    {
        id: "py-43",
        category: "Python",
        questionText: "How do you handle a file in Python with automatic cleanup?",
        options: ["open() with close()", "with open() as f:", "file.auto_close()", "try/finally"],
        correctOptionIndex: 1,
        explanation: "Context manager 'with' ensures file is closed automatically."
    },
    {
        id: "py-44",
        category: "Python",
        questionText: "What is the output of: bool([])?",
        options: ["True", "False", "None", "Error"],
        correctOptionIndex: 1,
        explanation: "Empty collections are falsy in Python."
    },
    {
        id: "py-45",
        category: "Python",
        questionText: "How do you get the current date in Python?",
        options: ["datetime.now()", "date.today()", "from datetime import date; date.today()", "time.date()"],
        correctOptionIndex: 2,
        explanation: "date.today() from datetime module returns current date."
    },
    {
        id: "py-46",
        category: "Python",
        questionText: "What does enumerate() return?",
        options: ["Just values", "Just indices", "Iterator of (index, value) tuples", "Dictionary"],
        correctOptionIndex: 2,
        explanation: "enumerate() yields index-value pairs during iteration."
    },
    {
        id: "py-47",
        category: "Python",
        questionText: "How do you concatenate DataFrames vertically?",
        options: ["df1.merge(df2)", "pd.concat([df1, df2])", "df1 + df2", "df1.join(df2)"],
        correctOptionIndex: 1,
        explanation: "pd.concat() stacks DataFrames vertically by default."
    },
    {
        id: "py-48",
        category: "Python",
        questionText: "What is the purpose of the pass statement?",
        options: ["Returns None", "Placeholder doing nothing", "Breaks loop", "Continues loop"],
        correctOptionIndex: 1,
        explanation: "pass is a null operation used as placeholder."
    },
    {
        id: "py-49",
        category: "Python",
        questionText: "How do you copy a list deeply in Python?",
        options: ["list.copy()", "import copy; copy.deepcopy(list)", "list[:]", "list.clone()"],
        correctOptionIndex: 1,
        explanation: "deepcopy() creates independent copies of nested objects."
    },
    {
        id: "py-50",
        category: "Python",
        questionText: "What does df.astype('int') do?",
        options: ["Filters integers", "Converts column data types to int", "Creates integer index", "Counts integers"],
        correctOptionIndex: 1,
        explanation: "astype() converts DataFrame column types."
    },
    {
        id: "py-51",
        category: "Python",
        questionText: "What is the output of: print(3 * 'ab')?",
        options: ["'3ab'", "'ababab'", "9", "Error"],
        correctOptionIndex: 1,
        explanation: "String multiplication repeats the string."
    },
    {
        id: "py-52",
        category: "Python",
        questionText: "How do you reverse a list in place?",
        options: ["list.reverse()", "list[::-1]", "reversed(list)", "list.flip()"],
        correctOptionIndex: 0,
        explanation: "reverse() modifies the list in place."
    },
    {
        id: "py-53",
        category: "Python",
        questionText: "What does map() function return?",
        options: ["List", "Iterator", "Dictionary", "Tuple"],
        correctOptionIndex: 1,
        explanation: "map() returns an iterator applying function to each item."
    },
    {
        id: "py-54",
        category: "Python",
        questionText: "How do you get unique values from a Pandas column?",
        options: ["df['col'].distinct()", "df['col'].unique()", "df['col'].values()", "df['col'].set()"],
        correctOptionIndex: 1,
        explanation: "unique() returns array of unique values in a Series."
    },
    {
        id: "py-55",
        category: "Python",
        questionText: "What is the output of: 5 // 2?",
        options: ["2.5", "2", "3", "2.0"],
        correctOptionIndex: 1,
        explanation: "// is floor division, returning integer result."
    },
    {
        id: "py-56",
        category: "Python",
        questionText: "How do you check the data types of DataFrame columns?",
        options: ["df.types()", "df.dtypes", "df.columns.types", "df.dtype()"],
        correctOptionIndex: 1,
        explanation: "dtypes attribute shows data type of each column."
    },
    {
        id: "py-57",
        category: "Python",
        questionText: "What does the any() function check?",
        options: ["All elements are True", "Any element is True", "No elements are True", "Type of elements"],
        correctOptionIndex: 1,
        explanation: "any() returns True if at least one element is truthy."
    },
    {
        id: "py-58",
        category: "Python",
        questionText: "How do you create a date range in Pandas?",
        options: ["pd.date_list()", "pd.date_range()", "pd.range_dates()", "pd.dates()"],
        correctOptionIndex: 1,
        explanation: "pd.date_range() generates sequence of dates."
    },
    {
        id: "py-59",
        category: "Python",
        questionText: "What is the purpose of the global keyword?",
        options: ["Creates global variable", "References global variable inside function", "Deletes variable", "Exports variable"],
        correctOptionIndex: 1,
        explanation: "global allows function to modify variables in global scope."
    },
    {
        id: "py-60",
        category: "Python",
        questionText: "How do you sample random rows from DataFrame?",
        options: ["df.random()", "df.sample()", "df.pick()", "df.select_random()"],
        correctOptionIndex: 1,
        explanation: "sample() returns random selection of rows."
    },
    {
        id: "py-61",
        category: "Python",
        questionText: "What is the difference between loc and iloc?",
        options: ["No difference", "loc uses labels, iloc uses positions", "iloc uses labels, loc uses positions", "Both use labels"],
        correctOptionIndex: 1,
        explanation: "loc uses labels; iloc uses integer indices."
    },
    {
        id: "py-62",
        category: "Python",
        questionText: "What does filter() function return?",
        options: ["List", "Iterator of items that pass test", "Dictionary", "Boolean array"],
        correctOptionIndex: 1,
        explanation: "filter() returns iterator of elements passing the test function."
    },
    {
        id: "py-63",
        category: "Python",
        questionText: "How do you calculate correlation between DataFrame columns?",
        options: ["df.corr()", "df.correlation()", "df.relate()", "df.coef()"],
        correctOptionIndex: 0,
        explanation: "corr() returns correlation matrix for numeric columns."
    },
    {
        id: "py-64",
        category: "Python",
        questionText: "What is a class method in Python?",
        options: ["Method bound to instance", "Method bound to class, not instance", "Static method", "Abstract method"],
        correctOptionIndex: 1,
        explanation: "Class methods receive cls as first argument, bound to class."
    },
    {
        id: "py-65",
        category: "Python",
        questionText: "How do you save a DataFrame to Parquet format?",
        options: ["df.save_parquet()", "df.to_parquet('file.parquet')", "df.write_parquet()", "df.parquet()"],
        correctOptionIndex: 1,
        explanation: "to_parquet() writes DataFrame to Parquet format."
    },
    {
        id: "py-66",
        category: "Python",
        questionText: "What does the reduce() function do?",
        options: ["Filters elements", "Applies function cumulatively to reduce to single value", "Maps elements", "Sorts elements"],
        correctOptionIndex: 1,
        explanation: "reduce() applies function cumulatively, reducing iterable to single value."
    },
    {
        id: "py-67",
        category: "Python",
        questionText: "How do you handle missing values by forward filling?",
        options: ["df.fillna('forward')", "df.ffill()", "df.forward_fill()", "df.fill('next')"],
        correctOptionIndex: 1,
        explanation: "ffill() propagates last valid value forward."
    },
    {
        id: "py-68",
        category: "Python",
        questionText: "What is the output of: [1, 2, 3][:-1]?",
        options: ["[1, 2]", "[1, 2, 3]", "[3]", "[2, 3]"],
        correctOptionIndex: 0,
        explanation: "[:-1] slices from start to second-to-last element."
    },
    {
        id: "py-69",
        category: "Python",
        questionText: "How do you create a set from multiple values?",
        options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "<1, 2, 3>"],
        correctOptionIndex: 0,
        explanation: "Curly braces with values create a set literal."
    },
    {
        id: "py-70",
        category: "Python",
        questionText: "What does df.value_counts() return?",
        options: ["Total count", "Frequency of each unique value", "Boolean mask", "Index of values"],
        correctOptionIndex: 1,
        explanation: "value_counts() returns frequency of each unique value."
    },
    {
        id: "py-71",
        category: "Python",
        questionText: "How do you check if string contains substring?",
        options: ["str.has('sub')", "'sub' in str", "str.contains('sub')", "str.find('sub') == True"],
        correctOptionIndex: 1,
        explanation: "'in' operator checks for substring presence."
    },
    {
        id: "py-72",
        category: "Python",
        questionText: "What is the output of: list(range(5, 0, -1))?",
        options: ["[5, 4, 3, 2, 1]", "[0, 1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1, 0]", "[1, 2, 3, 4, 5]"],
        correctOptionIndex: 0,
        explanation: "range(5, 0, -1) counts down from 5 to 1."
    },
    {
        id: "py-73",
        category: "Python",
        questionText: "How do you get the shape of a DataFrame?",
        options: ["df.size()", "df.shape", "df.dimensions", "df.len()"],
        correctOptionIndex: 1,
        explanation: "shape returns (rows, columns) tuple."
    },
    {
        id: "py-74",
        category: "Python",
        questionText: "What does df.columns return?",
        options: ["Column count", "Column names Index", "First column data", "Column types"],
        correctOptionIndex: 1,
        explanation: "columns attribute returns Index of column names."
    },
    {
        id: "py-75",
        category: "Python",
        questionText: "How do you convert string column to datetime?",
        options: ["df['date'].datetime()", "pd.to_datetime(df['date'])", "df['date'].as_date()", "df['date'].convert('datetime')"],
        correctOptionIndex: 1,
        explanation: "pd.to_datetime() parses string to datetime."
    },
    {
        id: "py-76",
        category: "Python",
        questionText: "What is the difference between == and is?",
        options: ["No difference", "== compares values, is compares identity", "is compares values, == compares identity", "Both compare identity"],
        correctOptionIndex: 1,
        explanation: "== tests value equality; is tests object identity."
    },
    {
        id: "py-77",
        category: "Python",
        questionText: "How do you remove duplicates from a list while preserving order?",
        options: ["set(list)", "list(dict.fromkeys(original))", "list.unique()", "list.distinct()"],
        correctOptionIndex: 1,
        explanation: "dict.fromkeys() preserves order while removing duplicates."
    },
    {
        id: "py-78",
        category: "Python",
        questionText: "What does itertools.chain() do?",
        options: ["Creates linked list", "Combines multiple iterables into one", "Repeats iterator", "Filters iterator"],
        correctOptionIndex: 1,
        explanation: "chain() concatenates multiple iterables into single iterator."
    },
    {
        id: "py-79",
        category: "Python",
        questionText: "How do you calculate cumulative sum in Pandas?",
        options: ["df['col'].total()", "df['col'].cumsum()", "df['col'].running_sum()", "df['col'].sum(cumulative=True)"],
        correctOptionIndex: 1,
        explanation: "cumsum() returns cumulative sum of values."
    },
    {
        id: "py-80",
        category: "Python",
        questionText: "What is the output of: sorted([3, 1, 4, 1, 5], reverse=True)?",
        options: ["[1, 1, 3, 4, 5]", "[5, 4, 3, 1, 1]", "[5, 4, 1, 3, 1]", "None"],
        correctOptionIndex: 1,
        explanation: "sorted() with reverse=True returns descending order."
    },
    {
        id: "py-81",
        category: "Python",
        questionText: "How do you calculate the mean of a column?",
        options: ["df['col'].avg()", "df['col'].mean()", "df['col'].average()", "mean(df['col'])"],
        correctOptionIndex: 1,
        explanation: "mean() calculates arithmetic mean of values."
    },
    {
        id: "py-82",
        category: "Python",
        questionText: "What is the purpose of collections.Counter?",
        options: ["Counts loop iterations", "Counts hashable objects", "Timer class", "Iterator counter"],
        correctOptionIndex: 1,
        explanation: "Counter counts occurrences of elements in iterable."
    },
    {
        id: "py-83",
        category: "Python",
        questionText: "How do you extract year from datetime column?",
        options: ["df['date'].year()", "df['date'].dt.year", "df['date'].get_year()", "year(df['date'])"],
        correctOptionIndex: 1,
        explanation: "dt accessor provides datetime properties like year."
    },
    {
        id: "py-84",
        category: "Python",
        questionText: "What does df.set_index('column') do?",
        options: ["Resets index", "Sets column as new index", "Adds index column", "Removes index"],
        correctOptionIndex: 1,
        explanation: "set_index() uses specified column as DataFrame index."
    },
    {
        id: "py-85",
        category: "Python",
        questionText: "How do you create a multi-index DataFrame?",
        options: ["pd.MultiIndex.from_arrays()", "df.multi_index()", "df.add_index()", "pd.IndexMany()"],
        correctOptionIndex: 0,
        explanation: "MultiIndex.from_arrays() creates hierarchical index."
    },
    {
        id: "py-86",
        category: "Python",
        questionText: "What is the output of: {**{'a': 1}, **{'b': 2}}?",
        options: ["Error", "{'a': 1, 'b': 2}", "[{'a': 1}, {'b': 2}]", "None"],
        correctOptionIndex: 1,
        explanation: "** unpacking merges dictionaries."
    },
    {
        id: "py-87",
        category: "Python",
        questionText: "How do you calculate standard deviation?",
        options: ["df['col'].stdev()", "df['col'].std()", "df['col'].sd()", "df['col'].stddev()"],
        correctOptionIndex: 1,
        explanation: "std() calculates standard deviation."
    },
    {
        id: "py-88",
        category: "Python",
        questionText: "What does df.clip(lower=0, upper=100) do?",
        options: ["Filters rows", "Limits values to range [0, 100]", "Removes outliers", "Samples data"],
        correctOptionIndex: 1,
        explanation: "clip() constrains values within specified bounds."
    },
    {
        id: "py-89",
        category: "Python",
        questionText: "How do you calculate rolling average?",
        options: ["df.rolling(window=3).mean()", "df.moving_avg(3)", "df.avg(rolling=3)", "df.roll(3).mean()"],
        correctOptionIndex: 0,
        explanation: "rolling().mean() calculates moving average."
    },
    {
        id: "py-90",
        category: "Python",
        questionText: "What is a context manager in Python?",
        options: ["Thread manager", "Object managing resource acquisition/release", "Memory allocator", "Process handler"],
        correctOptionIndex: 1,
        explanation: "Context managers handle setup/teardown, typically with 'with'."
    },
    {
        id: "py-91",
        category: "Python",
        questionText: "How do you read Excel file in Pandas?",
        options: ["pd.load_excel()", "pd.read_excel()", "pd.excel_read()", "pd.import_excel()"],
        correctOptionIndex: 1,
        explanation: "read_excel() reads Excel files into DataFrame."
    },
    {
        id: "py-92",
        category: "Python",
        questionText: "What does the walrus operator := do?",
        options: ["Deep comparison", "Assignment expression", "Type casting", "Floor division"],
        correctOptionIndex: 1,
        explanation: ":= assigns value as part of expression (Python 3.8+)."
    },
    {
        id: "py-93",
        category: "Python",
        questionText: "How do you flatten a nested list?",
        options: ["list.flat()", "[item for sublist in nested for item in sublist]", "nested.flatten()", "flat(nested)"],
        correctOptionIndex: 1,
        explanation: "Nested list comprehension flattens lists."
    },
    {
        id: "py-94",
        category: "Python",
        questionText: "What is the output of: print(f'{10:05d}')?",
        options: ["'10'", "'00010'", "'10.000'", "Error"],
        correctOptionIndex: 1,
        explanation: ":05d formats integer with leading zeros to 5 digits."
    },
    {
        id: "py-95",
        category: "Python",
        questionText: "How do you select multiple columns in Pandas?",
        options: ["df['col1', 'col2']", "df[['col1', 'col2']]", "df.select('col1', 'col2')", "df.cols(['col1', 'col2'])"],
        correctOptionIndex: 1,
        explanation: "Double brackets with list selects multiple columns."
    },
    {
        id: "py-96",
        category: "Python",
        questionText: "What does collections.defaultdict do?",
        options: ["Creates dictionary with default values for missing keys", "Sorts dictionary", "Filters dictionary", "Copies dictionary"],
        correctOptionIndex: 0,
        explanation: "defaultdict returns default value for missing keys."
    },
    {
        id: "py-97",
        category: "Python",
        questionText: "How do you calculate percentile in Pandas?",
        options: ["df['col'].percentile(50)", "df['col'].quantile(0.5)", "df['col'].pct(50)", "df['col'].median()"],
        correctOptionIndex: 1,
        explanation: "quantile(0.5) returns 50th percentile (median)."
    },
    {
        id: "py-98",
        category: "Python",
        questionText: "What is the purpose of @property decorator?",
        options: ["Creates static property", "Defines getter for class attribute", "Makes method private", "Caches return value"],
        correctOptionIndex: 1,
        explanation: "@property creates getter method accessed like attribute."
    },
    {
        id: "py-99",
        category: "Python",
        questionText: "How do you perform SQL-like operations on DataFrame?",
        options: ["df.query('column > 5')", "df.sql('SELECT * WHERE column > 5')", "df.execute('column > 5')", "df.filter_sql('column > 5')"],
        correctOptionIndex: 0,
        explanation: "query() uses string expressions for SQL-like filtering."
    },
    {
        id: "py-100",
        category: "Python",
        questionText: "What does the @staticmethod decorator do?",
        options: ["Makes method immutable", "Creates method without self parameter", "Caches method result", "Makes method thread-safe"],
        correctOptionIndex: 1,
        explanation: "Static methods don't receive implicit first argument."
    }
];
