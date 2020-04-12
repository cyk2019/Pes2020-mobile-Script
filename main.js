//随机时间
var randomTime = random(2,3)*1000;

//检测是否开启无障碍服务
toast("必须开启无障碍服务");
auto.waitFor()
toast("5秒后脚本启动");
sleep(5000);

//自动适配点击的屏幕宽高
setScreenMetrics(1080, 2340);

//提示信息
toast("实况足球手游脚本V1.1  启动...");
sleep(randomTime);
toast("当前屏幕尺寸 高："+device.height+" 宽："+device.width);
sleep(randomTime);

//检查是否有CaptureScreen文件夹
toast("自动创建ScreenCapture");
files.ensureDir("/sdcard/ScreenCapture/");
sleep(randomTime);

//获取截图权限
if(!images.requestScreenCapture())
{
    toast("获取截图权限失败！");
    exit();
}
else
{
    toast("获取截图权限成功！");
    sleep(randomTime);
}

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

var count = 0;

for(var i = 0;i<9999;i++)
{
    startGame();
    count = count + 1;
    toast("已经踢了"+count+"场");
}


/**
 * 游戏循环部分
 */
function startGame()
{
    var status_img; //状态截图
    var big_img; //截图大图
    var small_img; //目标小图片
    var p; //目标坐标

    //点击前往比赛
    click(2015,985);
    sleep(8000); //队伍匹配时间

    //点击下一步
    click(2015,985);
    sleep(randomTime);

    //进入正式比赛页面
    click(2015,985);

    //上半场
    sleep(240000);
    do{
        status_img = images.captureScreen();
        images.save(status_img, "/sdcard/ScreenCapture/index_img.png");
        sleep(randomTime);
        big_img = images.read("/sdcard/ScreenCapture/index_img.png");
        small_img = images.read("/sdcard/TargetPicture/target_1.jpg");
        p = images.findImage(big_img, small_img);
        sleep(2000);
    }while(p==null);
    big_img.recycle();
    small_img.recycle();
    click(2015,985);
    sleep(randomTime);
    click(2015,985);

    //下半场
    sleep(240000);
    do{
        status_img = images.captureScreen();
        images.save(status_img, "/sdcard/ScreenCapture/index_img.png");
        sleep(randomTime);
        big_img = images.read("/sdcard/ScreenCapture/index_img.png");
        small_img = images.read("/sdcard/TargetPicture/target_2.jpg");
        p = images.findImage(big_img, small_img);
        sleep(2000);
    }while(p==null);
    big_img.recycle();
    small_img.recycle();
    click(2015,985);
    sleep(randomTime);
    click(2015,985);
    sleep(5000);
    click(2015,985);
    sleep(randomTime);
    click(2015,985);
    sleep(8000);

    //出现活动奖励
    status_img = images.captureScreen();
    images.save(status_img, "/sdcard/ScreenCapture/index_img.png");
    sleep(randomTime);
    big_img = images.read("/sdcard/ScreenCapture/index_img.png");
    small_img = images.read("/sdcard/TargetPicture/target_3.jpg");
    p = images.findImage(big_img, small_img);
    if(!p) //出现活动奖励框
    {
        click(1180,885);
        sleep(randomTime);
        click(1180,885);
        sleep(randomTime);
        click(1180,885);
        sleep(randomTime);
    }
    big_img.recycle();
    small_img.recycle();
    sleep(randomTime);
}