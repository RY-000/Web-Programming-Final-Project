* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

.header {
    text-align: center;
    padding: 20px;
    background-color: #007bff;
    color: white;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
}

.form-container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    max-width: 400px;
    width: 100%;
    margin: 10px;
    display: none; /* Hide the registration form initially */
}

.form-container h2 {
    text-align: center;
}

.input-box {
    position: relative;
    margin-bottom: 20px;
}

.input-box input {
    width: 100%;
    padding: 10px;
    padding-left: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.input-box .icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
}

.btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}

p {
    text-align: center;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
