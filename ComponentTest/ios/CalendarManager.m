#import "CalendarManager.h"
//
// 在工程 Libraries 文件夹中添加 *.m 文件
// 
@implementation CalendarManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
    NSLog(@"Pretending to create an event %@ at %@", name, location);
}

@end