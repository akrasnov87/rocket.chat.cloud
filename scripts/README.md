## Сборка образа 

`yarn build:image`

## Запуск образа

`docker run -e DEBUG=rocket.chat.cloud:* --rm -p 9001:3000 akrasnov87/rocket.chat.cloud:0.0.0`

__Примечание__: если отладочная информация не нужна, то нужно удалить переменную `DEBUG`

Запускаем хост `http://localhost:9001` (должно отобразиться приветствие от `Express`)

### Переменные

* DEBUG=rocket.chat.cloud:* - будет отображаться отладочная информация Express;
* PORT - номер порта, на котором локально запускается NodeJS;
* VPATH - виртуальный каталог;
* DEVICE_CODE
* WORKSPACE_ID

### Лицензия

Если нужно переопределить характеристики лицензии, то создаём `volume` на каталог /data (заменяем файл `license.json`).

`docker run --rm -p 9001:3000 -v /home/a-krasnov/rocket.chat:/app/data akrasnov87/rocket.chat.cloud:latest`

#### Характеристики

В лицензии активированы все модули и числовые показатели подключений установлены на значении `500`:

<pre>
...
    "limits": {
        "activeUsers": [
            { "max": 500, "behavior": "start_fair_policy" },
            { "max": 501, "behavior": "prevent_action" }
        ],
        "guestUsers": [
            { "max": 500, "behavior": "start_fair_policy" },
            { "max": 501, "behavior": "prevent_action" }
        ],
        "roomsPerGuest": [
            { "max": 500, "behavior": "start_fair_policy" },
            { "max": 501, "behavior": "prevent_action" }
        ],
        "monthlyActiveContacts": [
            { "max": 500, "behavior": "start_fair_policy" },
            { "max": 501, "behavior": "prevent_action" }
        ]
    },
...
</pre>

Лицензия называется `Rocket Chat Cloud` и действительна до 2099 года.