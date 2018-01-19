"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XmlMethodCall_1 = require("../XmlMethodCall");
let api = new XmlMethodCall_1.default('richvmserver.local');
api.session.analystLogon('admin', '').then(() => {
    api.helpdesk.logAndAcceptNewCall('incident', {
        additionalCallValues: false,
    }).then(d => console.log(d)).then(() => {
        api.session.analystLogoff();
    });
});
api = new XmlMethodCall_1.default('http://localhost/sw/xmlmc/');
api.session.analystLogon('admin', '').then(() => {
    api.helpdesk.logAndAcceptNewCall('incident', {
        additionalCallValues: false,
    }).then(d => console.log(d)).then(() => {
        api.session.analystLogoff();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL2UyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUFvQztBQUVwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUM1QyxHQUFHLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBQztRQUN4QyxvQkFBb0IsRUFBRSxLQUFLO0tBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNuQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFJSCxHQUFHLEdBQUcsSUFBSSx1QkFBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDOUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDNUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUM7UUFDeEMsb0JBQW9CLEVBQUUsS0FBSztLQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFhtbG1jIGZyb20gJy4uL1htbE1ldGhvZENhbGwnXG5cbmxldCBhcGkgPSBuZXcgWG1sbWMoJ3JpY2h2bXNlcnZlci5sb2NhbCcpO1xuYXBpLnNlc3Npb24uYW5hbHlzdExvZ29uKCdhZG1pbicsICcnKS50aGVuKCgpID0+IHtcbiAgICBhcGkuaGVscGRlc2subG9nQW5kQWNjZXB0TmV3Q2FsbCgnaW5jaWRlbnQnLHtcbiAgICAgICAgYWRkaXRpb25hbENhbGxWYWx1ZXM6IGZhbHNlLFxuICAgIH0pLnRoZW4oZCA9PiBjb25zb2xlLmxvZyhkKSkudGhlbigoKSA9PiB7XG4gICAgICAgIGFwaS5zZXNzaW9uLmFuYWx5c3RMb2dvZmYoKTtcbiAgICB9KTtcbn0pO1xuXG5cblxuYXBpID0gbmV3IFhtbG1jKCdodHRwOi8vbG9jYWxob3N0L3N3L3htbG1jLycpO1xuYXBpLnNlc3Npb24uYW5hbHlzdExvZ29uKCdhZG1pbicsICcnKS50aGVuKCgpID0+IHtcbiAgICBhcGkuaGVscGRlc2subG9nQW5kQWNjZXB0TmV3Q2FsbCgnaW5jaWRlbnQnLHtcbiAgICAgICAgYWRkaXRpb25hbENhbGxWYWx1ZXM6IGZhbHNlLFxuICAgIH0pLnRoZW4oZCA9PiBjb25zb2xlLmxvZyhkKSkudGhlbigoKSA9PiB7XG4gICAgICAgIGFwaS5zZXNzaW9uLmFuYWx5c3RMb2dvZmYoKTtcbiAgICB9KTtcbn0pO1xuIl19