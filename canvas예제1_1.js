//캔버스 사용이유 : 픽셀하나하나를 자유롭게 조절가능
//html,css 불가능한 애니메이션동작 대처가능. 2D 중심 기반
//transform : 상하좌우 같이 조절 (따로 불가능)
//canvas : 좌표값이라 상하좌우 곡선, 대각선 가능
//캔버스 사용하려면 캔버스 객체와 context 객체 반드시 필요함
const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');//x,y축

ctx.fillStyle='green';
ctx.fillRect(10, 10, 150, 100); //채운사각형(위치x,위치y,가로,세로)
ctx.strokeRect(160, 110, 150, 100); //속빈 사각형
// ctx.clearRect(0, 0, canvas.width, canvas.height); //캔버스 초기화 (현재 캔버스 사이즈 전체 지움)
ctx.beginPath(); //시작점 셋팅
ctx.moveTo(canvas.width/2, canvas.height/2); //정중앙
// ctx.lineTo(0, canvas.height / 2);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();//실제 라인이 그려짐

ctx.beginPath(); //시작점 셋팅
//원그리기 : 원중앙x,y,반지름, 호도각0, 파이는180도, *2는360도, true는 시계방향
ctx.arc(500, 100, 50, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();