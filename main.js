//随机时间
var randomTime = random(2,3)*1000;

//检测是否开启无障碍服务
toast("必须开启无障碍服务");
auto.waitFor()
toast("5秒后脚本启动");
sleep(5000);

//提示信息
toast("实况足球手游脚本V1.0  启动...");
sleep(randomTime);
toast("当前屏幕尺寸 高："+device.height+" 宽："+device.width);
sleep(randomTime);

//自动设置适合的屏幕宽高
setScreenMetrics(1080,2340);

//点击比赛栏目
click(475,165);
sleep(randomTime);

//点击活动模式
click(1630,490);
sleep(randomTime);

//选择活动1
click(900,350);
sleep(randomTime);

//点击活动1的继续
click(1810,980);
sleep(randomTime);

//点击Sim比赛
click(1600,580);
sleep(randomTime);

//局数计数器
var count = 0;

for(var i = 0;i<999;i++)
{
    startGame();
    count = count + 1;
    toast("已经踢了 "+count+" 局");
}


/**
 * 游戏循环部分
 */
function startGame()
 {
     //点击前往比赛
    click(2015,985);
    sleep(8000); //队伍匹配时间

    //点击下一步
    click(2015,985);
    sleep(randomTime);

    //进入正式比赛页面
    click(2015,985);
    sleep(10000);

    for(var i = 0;i<110;i++)
    {
        click(2015,985);
        sleep(5000);
        toast("已经点击了"+i+"次");
    }

    for(var j = 0;j<5;j++)
    {
        click(1200,850);
        sleep(randomTime);   
    }
 }


 /**
* 悬浮窗计时器
*/
function timeWindow()
{
    var w = floaty.rawWindow(
        <frame gravity="center">
            <text id="text" textSize="18sp" textColor="#f44336"></text>
        </frame>
        );
    
    //设置悬浮窗位置
    w.setPosition(device.height/2.5, device.width/6);
    //设置悬浮窗尺寸
    w.setSize(700,200);
    w.setTouchable(false);
    
    setInterval(()=>{w.text.setText(showTime())},1000);
    
    function showTime()
    {
        var date = new Date();
        var time = util.format("当前时间 %d:%d:%d", date.getHours(),date.getMinutes(),date.getSeconds());
        return time;
    }
}