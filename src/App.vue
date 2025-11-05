<template>
  <div id="app">
    <h1>いいねアプリ</h1>
    <router-view />
  </div>
</template>

<style>
#app { 
  text-align: center; 
  font-family: sans-serif; 
  background-color: green;
  min-height: 100vh;
  padding-bottom: 40px;
  }


img { 
  border-radius: 50%; 
  width: 100px; 
  transition: transform 0.3s;
  }

img:hover {
  transform: scale(1.05);
}

button { 
  margin: 5px; 
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  }

button.like-btn {
  background-color: #ffce00;
  color: #333;
}

button.like-btn:hover {
  background-color: #ffd84d;
}

button.like-btn:active {
  transform: scale(1.1);
  box-shadow: 0 0 8px #ffce00;
}

button.send-btn {
  background-color: #007bff;
  color: white;
}

button.send-btn:hover {
  background-color: #3291ff;
}

button.send-btn:active {
  transform: scale(0.95);
}

button.cancel-btn {
  background-color: #ccc;
  color: #333;
}

button.cancel-btn:hover {
  background-color: black;
}
</style>