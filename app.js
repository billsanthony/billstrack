<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Athlete Performance Tracker</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }

        h1 {
            color: #333;
            text-align: center;
        }

        #searchForm {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        label {
            margin-right: 10px;
            font-weight: bold;
        }

        input {
            padding: 8px;
            margin-right: 20px;
        }

        button {
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button#newTabButton {
            padding: 10px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #performanceList {
            margin-top: 20px;
            text-align: center;
        }

        #performanceTable {
            margin-top: 20px;
            width: 100%;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        #performanceTable th, #performanceTable td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        #resultBox {
            margin-top: 20px;
            padding: 10px;
            background-color: #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Athlete Performance Tracker</h1>

    <form id="searchForm">
        <div>
            <label for="athleteNameInput">Athlete Name:</label>
            <input type="text" id="athleteNameInput" placeholder="Enter athlete name">
        </div>

        <div>
            <label for="sportCategoryInput">Sport Category:</label>
            <input type="text" id="sportCategoryInput" placeholder="Enter sport category">
        </div>

        <div>
            <label for="genderInput">Gender:</label>
            <input type="text" id="genderInput" placeholder="Enter gender">
        </div>

        <button onclick="searchAthlete()">Search</button>
        <button onclick="showRandomPerformances()">Random Search</button>
        <button id="newTabButton" onclick="showNewTabPerformances()">New Tab</button>
    </form>

    <div id="resultBox"></div>

    <table id="performanceTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Metric</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody id="performanceTableBody"></tbody>
    </table>

    <script src="app.js"></script>
</body>
</html>
