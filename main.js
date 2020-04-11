//常量
var randomTime = random(2,3)*1000;

//检测无障碍服务是否已经启用
if(!auto.waitFor())
{
    toast("必须开启无障碍服务");
    exit();
}

//提示信息
toast("当前屏幕尺寸，高："+device.height+" 宽："+device.width);
sleep(randomTime);
toast("实况足球手游辅助V1.0 启动中...");
sleep(randomTime);

//自动设置适合的屏幕宽高
setScreenMetrics(1080, 2340);

//点击比赛栏目
click(475,165);
sleep(randomTime);

//点击活动模式
click(1630,490);
sleep(randomTime);

//点击活动1
click(900,350);
sleep(randomTime);

//点击活动1继续
click(1810,980);
sleep(randomTime);

//点击Sim比赛
click(1600,580);
sleep(randomTime);

var count = 0;//局数计数器

for(var i = 0;i<50;i++)
{
    startGame();
    count = count + 1;
    toast("已经踢了"+count+"局");
}

function startGame()
{
    //点击前往比赛
    click(2015,985);
    sleep(7000);
    
    //点击下一步
    click(2015,985);
    sleep(randomTime);
    
    //点击确认进入比赛
    click(2015,985);
    sleep(10000);
    
    for(var i = 1;i<110;i++)
    {
        click(2015,985);
        sleep(5000);
        toast("当前已经点击"+i+"次");
    }

    for(var j = 0;j<5;j++)
    {
        click(1200,850);
        sleep(randomTime);   
    }
}