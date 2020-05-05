import execjs

def get_js(file_name):
    """以字符串格式传入文件名"""
    # f = open("./../js/my.js", 'r', encoding='utf-8') # 打开JS文件
    f = open(file_name, 'r', encoding='utf-8') # 打开JS文件
    line = f.readline()
    htmlstr = ''
    while line:
        htmlstr = htmlstr+line
        line = f.readline()
    return htmlstr
    f.close()

def compile_js(file_name):
    """以字符串格式传入文件名"""
    js_str = get_js(file_name)
    ctx = execjs.compile(js_str) #加载JS文件
    return ctx



if __name__ == '__main__':
    ctx = compile_js('RSA.js')
    print(ctx.call('test','xiaojianbang','aaaa'))#后面可以跟多个参数
    print(execjs.eval("1+1"))