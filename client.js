const socket = new WebSocket("ws://localhost:5500");

			socket.onopen = function()
			{
				console.log("Соединение с клиентом установлено");
				socket.send("HHHHHHHHH");
			};
			socket.onclose = function(event)
			{
				if (event.wasClean)
					console.log("Соединение с клиентом закрыто");
				else 
					alert("Ошибка, потеря связи с клиентом");
			};

			socket.onerror = function(error)
			{
				alert("Ошибка, невозможно установить соединение", error.message);
			}; 