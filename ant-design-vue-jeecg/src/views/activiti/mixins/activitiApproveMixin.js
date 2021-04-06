import { getAction, deleteAction, putAction, postAction, httpAction } from '@/api/manage'

export const activitiApproveMixin = {
  component(){},
  data(){
    return {
      url: {
        // 代办列表查询
        todoList: '/workflow/task/todoList',
        todoCounts: '/workflow/task/todoCounts',
        // 审批通过
        pass: '/workflow/task/pass',
        // 审批不通过
        back: '/workflow/task/back',
        // 审批打回 到某一个节点
        backToTask:'/workflow/task/backToTask',
        delegate:'/workflow/task/delegate',
        // 获取下一个节点 信息（审批人）
        getNextNode:'/workflow/process/getNextNode',
        // 获取节点
        getNode:'/workflow/process/getNode/',
        //
        getBackList:'/workflow/task/getBackList/',
        passAll:'/workflow/task/passAll/',
        backAll:'/workflow/task/backAll/',
      },
      // 查询参数
      param:{
        // 代办查询参数
        todo:{

        }
      },
    }
  },
  computed:{

  },
  methods:{
    // 查询代办数据
    searchTodoList() {
      let _this = this;
      getAction(this.url.todoList, this.param.todo).then(res => {
        // 处理代办查询结果
        _this.doTodoResult(res);
      }).catch(error => {
        console.log(error)
      }).catch(error => {
        console.log(error)
      })
    },
    searchTodoCounts(procDefKeys){
      return getAction(this.url.todoCounts, {"procDefIds":procDefKeys});
    },

    // 需要自定义覆盖的方法
    // 处理代办返回结果
    doTodoResult(result){

    }
  }
}