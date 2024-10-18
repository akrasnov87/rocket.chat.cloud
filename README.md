## Описание

Сервис авторизации для Rocket.Chat

### Применение

1. В корне приложения создать файл `.env` с содержимым:
<pre>
PORT=9001
DEBUG=rocket.chat.cloud:*
DEVICE_CODE=67109d4788e4b137a8fe5591
WORKSPACE_ID= 67109dc4d9b4c3e99f7fcf8d
</pre>

2. В корне приложения создать файл `license.json` с содержимым:
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
		{ "module": "unlimited-presence" }

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
* Поздравляю, у Вас активирована версия без ограничений!!!  