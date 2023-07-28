import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: $localize`Dashboard`,
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: $localize`NEW`
    }
  },{
    name: $localize`Employee`,
    url: '/employee',
    iconComponent: { name: 'cil-wc' },
    children: [
      {
        name: $localize`Employee Register`,
        url: '/employee/employee-reg',
        iconComponent: { name: 'cil-user-plus' },
      },   {
        name: $localize`Manage Employee `,
        url: '/employee/manage-employee',
        iconComponent: { name: 'cil-user' },
      },  {
        name: $localize`Department `,
        url: '/employee/department',
        iconComponent: { name: 'cil-bank' },
      },{
        name: $localize`Designation `,
        url: '/employee/designation',
        iconComponent: { name: 'cil-briefcase' },
      }

    ]
  },
  {
    name: $localize`Device`,
    url: '/device',
    iconComponent: { name: 'cil-devices' },
    children: [
      {
        name: $localize`Register Device`,
        url: '/device/register-device',
        iconComponent: { name: 'cil-screen-desktop' },

      }, {
        name: $localize`Hand Over Device`,
        url: '/device/hand-over-device',
        iconComponent: { name: 'cil-laptop' },

      }

    ]
  },{
    name: $localize`Gate Pass`,
    url: '/gate-pass',
    iconComponent: { name: 'cil-featured-playlist' },
    children: [
      {
        name: $localize`Personal Gate Pass`,
        url: '/gate-pass/personal-gate-pass',
        iconComponent: { name: 'cil-user' },
        children: [
          {
            iconComponent: { name: 'cil-note-add' },
            name: 'Create Gate Pass',
            url: '/gate-pass/personal-gate-pass/create-gate-pass'
          }, {
            iconComponent: { name: 'cil-barcode' },
            name: 'Department Head Approvel',
            url: '/gate-pass/personal-gate-pass/departmenthead-approvel'
          },
          {
            iconComponent: { name: 'cil-people' },
            name: 'Approve Gate Pass',
            url: '/gate-pass/personal-gate-pass/approve-gate-pass'
          },
          {
            iconComponent: { name: 'cil-barcode' },
            name: 'Security Gate Pass',
            url: '/gate-pass/personal-gate-pass/security-gate-pass'
          }


        ]
      }
    ]
  },
  {
    name: $localize`Leave`,
    url: '/leave',
    iconComponent: { name: 'cil-calendar-check' },
    children: [
      {
        name: $localize`Apply Leave`,
        url: '/leave/apply-leave',
        iconComponent: { name: 'cil-terminal' },
      }, {
        name: $localize`Approve Leave`,
        url: '/leave/approve-leave',
        iconComponent: { name: 'cil-task' },

      }

    ]
  }, {
    name: $localize`Transport`,
    url: '/transport',
    iconComponent: { name: 'cil-garage' },
    children: [
      {
        name: $localize`Book Transport`,
        url: '/transport/book-transport',
        iconComponent: { name: 'cil-bus-alt' },
      },{
        name: $localize`Create Transport`,
        url: '/transport/create-transport',
        iconComponent: { name: 'cil-bus-alt' },
      },{
        name: $localize`Register Driver`,
        url: '/transport/register-driver',
        iconComponent: { name: 'cil-bus-alt' },
      }

    ]
  },{
    name: $localize`Meal`,
    url: '/meal',
    iconComponent: { name: 'cil-restaurant' },
    children: [
      {
        name: $localize`Meal Ordering`,
        url: '/meal/request-meal',
        iconComponent: { name: 'cil-pizza' },
      }

    ]
  },
  {
    name: $localize`User`,
    url: '/user',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: $localize`Login`,
        url: '/user/login',
        iconComponent: { name: 'cil-screen-desktop' },
      },
      {
        name: $localize`Register User`,
        url: '/user/register-user',
        iconComponent: { name: 'cil-screen-desktop' },
      },
      {
        name: $localize`Reset Password`,
        url: '/user/reset-password',
        iconComponent: { name: 'cil-screen-desktop' },
      },
       {
        name: $localize`Manage User`,
        url: '/user/manage-user',
        iconComponent: { name: 'cil-screen-desktop' },
      }

    ]
  },{
    name: $localize`Visitor`,
    url: '/visitor',
    iconComponent: { name: 'cil-user' },
    children: [

      {
        name: $localize`Manage Visitor`,
        url: '/visitor/manage-visitor',
        iconComponent: { name: 'cil-user' },
      },
      {
        name: $localize`Visitor Appointment`,
        url: '/visitor/visitor-appointment',
        iconComponent: { name: 'cil-user' },
      }



    ]
  },
  {
    name: $localize`Report`,
    url: '/report',
    iconComponent: { name: 'cil-calendar' },
    children: [
      {
        name: $localize`Meal Report`,
        url: '/report/meal-report',
        iconComponent: { name: 'cil-calendar-check' },
      },
      {
        name: $localize`Leave Report`,
        url: '/report/leave-report',
        iconComponent: { name: 'cil-calendar-check' },
      }


    ]
  }
];
