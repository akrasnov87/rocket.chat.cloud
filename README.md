## Описание

Сервис активации для `Rocket.Chat`. 

Суть активации в запуске хоста и указании этого адреса в настройках переменных `Rocket.Chat`:

<pre>
Cloud_Url=http://localhost:9001
</pre>

__Примечание__: активация работает, только с проектом `https://github.com/akrasnov87/Rocket.Chat`.

### Внутрянка

Сервис просто переопределяет основной набор методов, которые обращаются к хосту `cloud.rocket.chat` (см. `./routes/index.js`).

### Docker

Работа и способ запуска описан в каталоге .`/scripts` (см. `README.md`)

Наименование контейнера в docker `akrasnov87/rocket.chat.cloud:1.0.0`.

### Ручное запуск без контейнеров

1. В корне приложения создать файл `.env` с содержимым:
<pre>
PORT=9001
DEBUG=rocket.chat.cloud:*
DEVICE_CODE=67109d4788e4b137a8fe5591
WORKSPACE_ID= 67109dc4d9b4c3e99f7fcf8d
ROOT_URL=http://localhost
</pre>

2. В корне приложения создать файл `data/license.json` с содержимым:
<pre>
{
	"version": "3.0",
	"information": {
		"id": "670f499588e4b137a8fcd000",
		"autoRenew": false,
		"createdAt": "2024-10-16T04:38:17.561381544Z",
		"visualExpiration": null,
		"notifyAdminsAt": null,
		"notifyUsersAt": null,
		"trial": false,
		"cancellable": true,
		"offline": true,
		"grantedBy": {},
		"grantedTo": {},
		"tags": [{ "name": "Starter Crack", "color": "#F3BE08" }]
	},
	"validation": {
		"serverUrls": [{ "value": "localhost:3000", "type": "url" }],
		"cloudWorkspaceId": "670f499588e4b137a8fcd000",
		"serverUniqueId": "d0b77298-bcc2-4a96-bbc3-0b0919ae5c4f",
		"validPeriods": [{ "validUntil": "2024-12-05T04:38:17.561376177Z", "invalidBehavior": "invalidate_license" }],
		"legalTextAgreement": { "type": "required", "acceptedVia": "cloud" },
		"statisticsReport": { "required": true, "allowedStaleInDays": 2 }
	},
	"grantedModules": [
		{ "module": "auditing" },
		{ "module": "canned-responses" },
		{ "module": "ldap-enterprise" },
		{ "module": "livechat-enterprise" },
		{ "module": "voip-enterprise" },
		{ "module": "omnichannel-mobile-enterprise" },
		{ "module": "engagement-dashboard" },
		{ "module": "push-privacy" },
		{ "module": "scalability" },
		{ "module": "teams-mention" },
		{ "module": "saml-enterprise" },
		{ "module": "oauth-enterprise" },
		{ "module": "federation" },
		{ "module": "videoconference-enterprise" },
		{ "module": "message-read-receipt" },
		{ "module": "outlook-calendar" },
		{ "module": "hide-watermark" },
		{ "module": "custom-roles" },
		{ "module": "accessibility-certification" },
		{ "module": "unlimited-presence" },
		{ "module": "device-management" }

	],
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
	"cloudMeta": {}
}
</pre>

Корректируем дату в свойстве `validUntil` до требуемой (если будет меньше текущей, то будет активирована community версия).

3. Запускаем хост
<pre>
node ./bin/www --env-file=.env
</pre> 

<b>Примечание</b>: версия nodejs должна быть не ниже `20`

4. В настройках Rocket.Chat указать переменную `Cloud_Url=http://localhost:9001`

* Выполняем авторизацию
* Заполняем данные (они не будут направлены в cloud.rocket.chat)
* В конце при регистрации `Workspace` указывает указываем почту и нажимаем "Зарегистрироваться"
* Как только появится уведомление, что рабочее пространство зарегистрировано и готово к работе - обновляем страницу
* Переходим в раздел подписки (`Subscription`) и нажимаем кнопку `Sync license update`
* Поздравляю, у Вас активирована версия без ограничений!!!  

### Разработка и отладка

1. после получение версии из `git` в к корне каталога выполняем `npm install`;
2. создаём `launch.json` файл в папке `.vscode`:

<pre>
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "cloud start",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["start"],
      "cwd": "${workspaceFolder}",
      "envFile": "${workspaceFolder}/data/.env"
    }
  ]
}
</pre>

3. создаём файлы `.env` и `data/license.json`.
4. запускаем проект в `vscode`