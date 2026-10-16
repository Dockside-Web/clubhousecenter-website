import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Lock,
  LayoutDashboard,
  CircleParking,
  Wifi,
  UserCheck,
  Fan,
  Building,
  Mail,
  Phone,
  User,
  Warehouse,
  SendHorizontal,
  ChevronDown,
  Zap
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Lock,
      LayoutDashboard,
      CircleParking,
      Wifi,
      UserCheck,
      Fan,
      Building,
      Mail,
      Phone,
      User,
      Warehouse,
      SendHorizontal,
      ChevronDown,
      Zap
    })
  ],
  exports: [LucideAngularModule]
})
export class LucideIconsModule { }