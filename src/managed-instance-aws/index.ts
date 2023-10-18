// https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedInstanceAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#auto_healing ManagedInstanceAws#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#block_devices_mode ManagedInstanceAws#block_devices_mode}
  */
  readonly blockDevicesMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#cpu_credits ManagedInstanceAws#cpu_credits}
  */
  readonly cpuCredits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#description ManagedInstanceAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#draining_timeout ManagedInstanceAws#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#ebs_optimized ManagedInstanceAws#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#elastic_ip ManagedInstanceAws#elastic_ip}
  */
  readonly elasticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#enable_monitoring ManagedInstanceAws#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#fall_back_to_od ManagedInstanceAws#fall_back_to_od}
  */
  readonly fallBackToOd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#grace_period ManagedInstanceAws#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#health_check_type ManagedInstanceAws#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#iam_instance_profile ManagedInstanceAws#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#id ManagedInstanceAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#image_id ManagedInstanceAws#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#instance_types ManagedInstanceAws#instance_types}
  */
  readonly instanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#key_pair ManagedInstanceAws#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#life_cycle ManagedInstanceAws#life_cycle}
  */
  readonly lifeCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#minimum_instance_lifetime ManagedInstanceAws#minimum_instance_lifetime}
  */
  readonly minimumInstanceLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#optimization_windows ManagedInstanceAws#optimization_windows}
  */
  readonly optimizationWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#orientation ManagedInstanceAws#orientation}
  */
  readonly orientation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#persist_block_devices ManagedInstanceAws#persist_block_devices}
  */
  readonly persistBlockDevices: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#persist_private_ip ManagedInstanceAws#persist_private_ip}
  */
  readonly persistPrivateIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#persist_root_device ManagedInstanceAws#persist_root_device}
  */
  readonly persistRootDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#placement_tenancy ManagedInstanceAws#placement_tenancy}
  */
  readonly placementTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#preferred_type ManagedInstanceAws#preferred_type}
  */
  readonly preferredType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#private_ip ManagedInstanceAws#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#product ManagedInstanceAws#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#region ManagedInstanceAws#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#security_group_ids ManagedInstanceAws#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#shutdown_script ManagedInstanceAws#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#subnet_ids ManagedInstanceAws#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#unhealthy_duration ManagedInstanceAws#unhealthy_duration}
  */
  readonly unhealthyDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#user_data ManagedInstanceAws#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#utilize_reserved_instances ManagedInstanceAws#utilize_reserved_instances}
  */
  readonly utilizeReservedInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#vpc_id ManagedInstanceAws#vpc_id}
  */
  readonly vpcId: string;
  /**
  * block_device_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#block_device_mappings ManagedInstanceAws#block_device_mappings}
  */
  readonly blockDeviceMappings?: ManagedInstanceAwsBlockDeviceMappings[] | cdktf.IResolvable;
  /**
  * delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#delete ManagedInstanceAws#delete}
  */
  readonly delete?: ManagedInstanceAwsDelete[] | cdktf.IResolvable;
  /**
  * integration_route53 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#integration_route53 ManagedInstanceAws#integration_route53}
  */
  readonly integrationRoute53?: ManagedInstanceAwsIntegrationRoute53;
  /**
  * load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#load_balancers ManagedInstanceAws#load_balancers}
  */
  readonly loadBalancers?: ManagedInstanceAwsLoadBalancers[] | cdktf.IResolvable;
  /**
  * managed_instance_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#managed_instance_action ManagedInstanceAws#managed_instance_action}
  */
  readonly managedInstanceAction?: ManagedInstanceAwsManagedInstanceAction;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#network_interface ManagedInstanceAws#network_interface}
  */
  readonly networkInterface?: ManagedInstanceAwsNetworkInterface[] | cdktf.IResolvable;
  /**
  * resource_tag_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#resource_tag_specification ManagedInstanceAws#resource_tag_specification}
  */
  readonly resourceTagSpecification?: ManagedInstanceAwsResourceTagSpecification[] | cdktf.IResolvable;
  /**
  * revert_to_spot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#revert_to_spot ManagedInstanceAws#revert_to_spot}
  */
  readonly revertToSpot?: ManagedInstanceAwsRevertToSpot;
  /**
  * scheduled_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#scheduled_task ManagedInstanceAws#scheduled_task}
  */
  readonly scheduledTask?: ManagedInstanceAwsScheduledTask[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#tags ManagedInstanceAws#tags}
  */
  readonly tags?: ManagedInstanceAwsTags[] | cdktf.IResolvable;
}
export interface ManagedInstanceAwsBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#delete_on_termination ManagedInstanceAws#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#iops ManagedInstanceAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#throughput ManagedInstanceAws#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#volume_size ManagedInstanceAws#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#volume_type ManagedInstanceAws#volume_type}
  */
  readonly volumeType?: string;
}

export function managedInstanceAwsBlockDeviceMappingsEbsToTerraform(struct?: ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference | ManagedInstanceAwsBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    iops: cdktf.numberToTerraform(struct!.iops),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstanceAwsBlockDeviceMappingsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsBlockDeviceMappingsEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteOnTermination = undefined;
      this._iops = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteOnTermination = value.deleteOnTermination;
      this._iops = value.iops;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface ManagedInstanceAwsBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#device_name ManagedInstanceAws#device_name}
  */
  readonly deviceName: string;
  /**
  * ebs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#ebs ManagedInstanceAws#ebs}
  */
  readonly ebs?: ManagedInstanceAwsBlockDeviceMappingsEbs;
}

export function managedInstanceAwsBlockDeviceMappingsToTerraform(struct?: ManagedInstanceAwsBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: managedInstanceAwsBlockDeviceMappingsEbsToTerraform(struct!.ebs),
  }
}

export class ManagedInstanceAwsBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsBlockDeviceMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._ebs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsBlockDeviceMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._ebs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._ebs.internalValue = value.ebs;
    }
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs = new ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: ManagedInstanceAwsBlockDeviceMappingsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }
}

export class ManagedInstanceAwsBlockDeviceMappingsList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsBlockDeviceMappings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsBlockDeviceMappingsOutputReference {
    return new ManagedInstanceAwsBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedInstanceAwsDelete {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#ami_backup_should_delete_images ManagedInstanceAws#ami_backup_should_delete_images}
  */
  readonly amiBackupShouldDeleteImages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#deallocation_config_should_delete_images ManagedInstanceAws#deallocation_config_should_delete_images}
  */
  readonly deallocationConfigShouldDeleteImages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#should_delete_network_interfaces ManagedInstanceAws#should_delete_network_interfaces}
  */
  readonly shouldDeleteNetworkInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#should_delete_snapshots ManagedInstanceAws#should_delete_snapshots}
  */
  readonly shouldDeleteSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#should_delete_volumes ManagedInstanceAws#should_delete_volumes}
  */
  readonly shouldDeleteVolumes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#should_terminate_instance ManagedInstanceAws#should_terminate_instance}
  */
  readonly shouldTerminateInstance?: boolean | cdktf.IResolvable;
}

export function managedInstanceAwsDeleteToTerraform(struct?: ManagedInstanceAwsDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_backup_should_delete_images: cdktf.booleanToTerraform(struct!.amiBackupShouldDeleteImages),
    deallocation_config_should_delete_images: cdktf.booleanToTerraform(struct!.deallocationConfigShouldDeleteImages),
    should_delete_network_interfaces: cdktf.booleanToTerraform(struct!.shouldDeleteNetworkInterfaces),
    should_delete_snapshots: cdktf.booleanToTerraform(struct!.shouldDeleteSnapshots),
    should_delete_volumes: cdktf.booleanToTerraform(struct!.shouldDeleteVolumes),
    should_terminate_instance: cdktf.booleanToTerraform(struct!.shouldTerminateInstance),
  }
}

export class ManagedInstanceAwsDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiBackupShouldDeleteImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiBackupShouldDeleteImages = this._amiBackupShouldDeleteImages;
    }
    if (this._deallocationConfigShouldDeleteImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.deallocationConfigShouldDeleteImages = this._deallocationConfigShouldDeleteImages;
    }
    if (this._shouldDeleteNetworkInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteNetworkInterfaces = this._shouldDeleteNetworkInterfaces;
    }
    if (this._shouldDeleteSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteSnapshots = this._shouldDeleteSnapshots;
    }
    if (this._shouldDeleteVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldDeleteVolumes = this._shouldDeleteVolumes;
    }
    if (this._shouldTerminateInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTerminateInstance = this._shouldTerminateInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amiBackupShouldDeleteImages = undefined;
      this._deallocationConfigShouldDeleteImages = undefined;
      this._shouldDeleteNetworkInterfaces = undefined;
      this._shouldDeleteSnapshots = undefined;
      this._shouldDeleteVolumes = undefined;
      this._shouldTerminateInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amiBackupShouldDeleteImages = value.amiBackupShouldDeleteImages;
      this._deallocationConfigShouldDeleteImages = value.deallocationConfigShouldDeleteImages;
      this._shouldDeleteNetworkInterfaces = value.shouldDeleteNetworkInterfaces;
      this._shouldDeleteSnapshots = value.shouldDeleteSnapshots;
      this._shouldDeleteVolumes = value.shouldDeleteVolumes;
      this._shouldTerminateInstance = value.shouldTerminateInstance;
    }
  }

  // ami_backup_should_delete_images - computed: false, optional: true, required: false
  private _amiBackupShouldDeleteImages?: boolean | cdktf.IResolvable; 
  public get amiBackupShouldDeleteImages() {
    return this.getBooleanAttribute('ami_backup_should_delete_images');
  }
  public set amiBackupShouldDeleteImages(value: boolean | cdktf.IResolvable) {
    this._amiBackupShouldDeleteImages = value;
  }
  public resetAmiBackupShouldDeleteImages() {
    this._amiBackupShouldDeleteImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiBackupShouldDeleteImagesInput() {
    return this._amiBackupShouldDeleteImages;
  }

  // deallocation_config_should_delete_images - computed: false, optional: true, required: false
  private _deallocationConfigShouldDeleteImages?: boolean | cdktf.IResolvable; 
  public get deallocationConfigShouldDeleteImages() {
    return this.getBooleanAttribute('deallocation_config_should_delete_images');
  }
  public set deallocationConfigShouldDeleteImages(value: boolean | cdktf.IResolvable) {
    this._deallocationConfigShouldDeleteImages = value;
  }
  public resetDeallocationConfigShouldDeleteImages() {
    this._deallocationConfigShouldDeleteImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deallocationConfigShouldDeleteImagesInput() {
    return this._deallocationConfigShouldDeleteImages;
  }

  // should_delete_network_interfaces - computed: false, optional: true, required: false
  private _shouldDeleteNetworkInterfaces?: boolean | cdktf.IResolvable; 
  public get shouldDeleteNetworkInterfaces() {
    return this.getBooleanAttribute('should_delete_network_interfaces');
  }
  public set shouldDeleteNetworkInterfaces(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteNetworkInterfaces = value;
  }
  public resetShouldDeleteNetworkInterfaces() {
    this._shouldDeleteNetworkInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteNetworkInterfacesInput() {
    return this._shouldDeleteNetworkInterfaces;
  }

  // should_delete_snapshots - computed: false, optional: true, required: false
  private _shouldDeleteSnapshots?: boolean | cdktf.IResolvable; 
  public get shouldDeleteSnapshots() {
    return this.getBooleanAttribute('should_delete_snapshots');
  }
  public set shouldDeleteSnapshots(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteSnapshots = value;
  }
  public resetShouldDeleteSnapshots() {
    this._shouldDeleteSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteSnapshotsInput() {
    return this._shouldDeleteSnapshots;
  }

  // should_delete_volumes - computed: false, optional: true, required: false
  private _shouldDeleteVolumes?: boolean | cdktf.IResolvable; 
  public get shouldDeleteVolumes() {
    return this.getBooleanAttribute('should_delete_volumes');
  }
  public set shouldDeleteVolumes(value: boolean | cdktf.IResolvable) {
    this._shouldDeleteVolumes = value;
  }
  public resetShouldDeleteVolumes() {
    this._shouldDeleteVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldDeleteVolumesInput() {
    return this._shouldDeleteVolumes;
  }

  // should_terminate_instance - computed: false, optional: true, required: false
  private _shouldTerminateInstance?: boolean | cdktf.IResolvable; 
  public get shouldTerminateInstance() {
    return this.getBooleanAttribute('should_terminate_instance');
  }
  public set shouldTerminateInstance(value: boolean | cdktf.IResolvable) {
    this._shouldTerminateInstance = value;
  }
  public resetShouldTerminateInstance() {
    this._shouldTerminateInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTerminateInstanceInput() {
    return this._shouldTerminateInstance;
  }
}

export class ManagedInstanceAwsDeleteList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsDelete[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsDeleteOutputReference {
    return new ManagedInstanceAwsDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedInstanceAwsIntegrationRoute53DomainsRecordSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#use_public_dns ManagedInstanceAws#use_public_dns}
  */
  readonly usePublicDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#use_public_ip ManagedInstanceAws#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function managedInstanceAwsIntegrationRoute53DomainsRecordSetsToTerraform(struct?: ManagedInstanceAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_public_dns: cdktf.booleanToTerraform(struct!.usePublicDns),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}

export class ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._usePublicDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicDns = this._usePublicDns;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsIntegrationRoute53DomainsRecordSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._usePublicDns = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._usePublicDns = value.usePublicDns;
      this._usePublicIp = value.usePublicIp;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // use_public_dns - computed: false, optional: true, required: false
  private _usePublicDns?: boolean | cdktf.IResolvable; 
  public get usePublicDns() {
    return this.getBooleanAttribute('use_public_dns');
  }
  public set usePublicDns(value: boolean | cdktf.IResolvable) {
    this._usePublicDns = value;
  }
  public resetUsePublicDns() {
    this._usePublicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicDnsInput() {
    return this._usePublicDns;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsIntegrationRoute53DomainsRecordSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference {
    return new ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedInstanceAwsIntegrationRoute53Domains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#hosted_zone_id ManagedInstanceAws#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#record_set_type ManagedInstanceAws#record_set_type}
  */
  readonly recordSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#spotinst_acct_id ManagedInstanceAws#spotinst_acct_id}
  */
  readonly spotinstAcctId?: string;
  /**
  * record_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#record_sets ManagedInstanceAws#record_sets}
  */
  readonly recordSets: ManagedInstanceAwsIntegrationRoute53DomainsRecordSets[] | cdktf.IResolvable;
}

export function managedInstanceAwsIntegrationRoute53DomainsToTerraform(struct?: ManagedInstanceAwsIntegrationRoute53Domains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
    record_set_type: cdktf.stringToTerraform(struct!.recordSetType),
    spotinst_acct_id: cdktf.stringToTerraform(struct!.spotinstAcctId),
    record_sets: cdktf.listMapper(managedInstanceAwsIntegrationRoute53DomainsRecordSetsToTerraform, true)(struct!.recordSets),
  }
}

export class ManagedInstanceAwsIntegrationRoute53DomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsIntegrationRoute53Domains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    if (this._recordSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetType = this._recordSetType;
    }
    if (this._spotinstAcctId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotinstAcctId = this._spotinstAcctId;
    }
    if (this._recordSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSets = this._recordSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsIntegrationRoute53Domains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostedZoneId = undefined;
      this._recordSetType = undefined;
      this._spotinstAcctId = undefined;
      this._recordSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostedZoneId = value.hostedZoneId;
      this._recordSetType = value.recordSetType;
      this._spotinstAcctId = value.spotinstAcctId;
      this._recordSets.internalValue = value.recordSets;
    }
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // record_set_type - computed: false, optional: true, required: false
  private _recordSetType?: string; 
  public get recordSetType() {
    return this.getStringAttribute('record_set_type');
  }
  public set recordSetType(value: string) {
    this._recordSetType = value;
  }
  public resetRecordSetType() {
    this._recordSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetTypeInput() {
    return this._recordSetType;
  }

  // spotinst_acct_id - computed: false, optional: true, required: false
  private _spotinstAcctId?: string; 
  public get spotinstAcctId() {
    return this.getStringAttribute('spotinst_acct_id');
  }
  public set spotinstAcctId(value: string) {
    this._spotinstAcctId = value;
  }
  public resetSpotinstAcctId() {
    this._spotinstAcctId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotinstAcctIdInput() {
    return this._spotinstAcctId;
  }

  // record_sets - computed: false, optional: false, required: true
  private _recordSets = new ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList(this, "record_sets", true);
  public get recordSets() {
    return this._recordSets;
  }
  public putRecordSets(value: ManagedInstanceAwsIntegrationRoute53DomainsRecordSets[] | cdktf.IResolvable) {
    this._recordSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetsInput() {
    return this._recordSets.internalValue;
  }
}

export class ManagedInstanceAwsIntegrationRoute53DomainsList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsIntegrationRoute53Domains[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsIntegrationRoute53DomainsOutputReference {
    return new ManagedInstanceAwsIntegrationRoute53DomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedInstanceAwsIntegrationRoute53 {
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#domains ManagedInstanceAws#domains}
  */
  readonly domains: ManagedInstanceAwsIntegrationRoute53Domains[] | cdktf.IResolvable;
}

export function managedInstanceAwsIntegrationRoute53ToTerraform(struct?: ManagedInstanceAwsIntegrationRoute53OutputReference | ManagedInstanceAwsIntegrationRoute53): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(managedInstanceAwsIntegrationRoute53DomainsToTerraform, true)(struct!.domains),
  }
}

export class ManagedInstanceAwsIntegrationRoute53OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstanceAwsIntegrationRoute53 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsIntegrationRoute53 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains.internalValue = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new ManagedInstanceAwsIntegrationRoute53DomainsList(this, "domains", true);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: ManagedInstanceAwsIntegrationRoute53Domains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface ManagedInstanceAwsLoadBalancers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#arn ManagedInstanceAws#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#auto_weight ManagedInstanceAws#auto_weight}
  */
  readonly autoWeight?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#az_awareness ManagedInstanceAws#az_awareness}
  */
  readonly azAwareness?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#balancer_id ManagedInstanceAws#balancer_id}
  */
  readonly balancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#target_set_id ManagedInstanceAws#target_set_id}
  */
  readonly targetSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}
  */
  readonly type: string;
}

export function managedInstanceAwsLoadBalancersToTerraform(struct?: ManagedInstanceAwsLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    auto_weight: cdktf.booleanToTerraform(struct!.autoWeight),
    az_awareness: cdktf.booleanToTerraform(struct!.azAwareness),
    balancer_id: cdktf.stringToTerraform(struct!.balancerId),
    name: cdktf.stringToTerraform(struct!.name),
    target_set_id: cdktf.stringToTerraform(struct!.targetSetId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ManagedInstanceAwsLoadBalancersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._autoWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoWeight = this._autoWeight;
    }
    if (this._azAwareness !== undefined) {
      hasAnyValues = true;
      internalValueResult.azAwareness = this._azAwareness;
    }
    if (this._balancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.balancerId = this._balancerId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSetId = this._targetSetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._autoWeight = undefined;
      this._azAwareness = undefined;
      this._balancerId = undefined;
      this._name = undefined;
      this._targetSetId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._autoWeight = value.autoWeight;
      this._azAwareness = value.azAwareness;
      this._balancerId = value.balancerId;
      this._name = value.name;
      this._targetSetId = value.targetSetId;
      this._type = value.type;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // auto_weight - computed: false, optional: true, required: false
  private _autoWeight?: boolean | cdktf.IResolvable; 
  public get autoWeight() {
    return this.getBooleanAttribute('auto_weight');
  }
  public set autoWeight(value: boolean | cdktf.IResolvable) {
    this._autoWeight = value;
  }
  public resetAutoWeight() {
    this._autoWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoWeightInput() {
    return this._autoWeight;
  }

  // az_awareness - computed: false, optional: true, required: false
  private _azAwareness?: boolean | cdktf.IResolvable; 
  public get azAwareness() {
    return this.getBooleanAttribute('az_awareness');
  }
  public set azAwareness(value: boolean | cdktf.IResolvable) {
    this._azAwareness = value;
  }
  public resetAzAwareness() {
    this._azAwareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azAwarenessInput() {
    return this._azAwareness;
  }

  // balancer_id - computed: false, optional: true, required: false
  private _balancerId?: string; 
  public get balancerId() {
    return this.getStringAttribute('balancer_id');
  }
  public set balancerId(value: string) {
    this._balancerId = value;
  }
  public resetBalancerId() {
    this._balancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerIdInput() {
    return this._balancerId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // target_set_id - computed: false, optional: true, required: false
  private _targetSetId?: string; 
  public get targetSetId() {
    return this.getStringAttribute('target_set_id');
  }
  public set targetSetId(value: string) {
    this._targetSetId = value;
  }
  public resetTargetSetId() {
    this._targetSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSetIdInput() {
    return this._targetSetId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ManagedInstanceAwsLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsLoadBalancers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsLoadBalancersOutputReference {
    return new ManagedInstanceAwsLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedInstanceAwsManagedInstanceAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}
  */
  readonly type: string;
}

export function managedInstanceAwsManagedInstanceActionToTerraform(struct?: ManagedInstanceAwsManagedInstanceActionOutputReference | ManagedInstanceAwsManagedInstanceAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ManagedInstanceAwsManagedInstanceActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstanceAwsManagedInstanceAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsManagedInstanceAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ManagedInstanceAwsNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#associate_ipv6_address ManagedInstanceAws#associate_ipv6_address}
  */
  readonly associateIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#associate_public_ip_address ManagedInstanceAws#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#device_index ManagedInstanceAws#device_index}
  */
  readonly deviceIndex: string;
}

export function managedInstanceAwsNetworkInterfaceToTerraform(struct?: ManagedInstanceAwsNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associate_ipv6_address: cdktf.booleanToTerraform(struct!.associateIpv6Address),
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    device_index: cdktf.stringToTerraform(struct!.deviceIndex),
  }
}

export class ManagedInstanceAwsNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associateIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.associateIpv6Address = this._associateIpv6Address;
    }
    if (this._associatePublicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
    }
    if (this._deviceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIndex = this._deviceIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associateIpv6Address = undefined;
      this._associatePublicIpAddress = undefined;
      this._deviceIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associateIpv6Address = value.associateIpv6Address;
      this._associatePublicIpAddress = value.associatePublicIpAddress;
      this._deviceIndex = value.deviceIndex;
    }
  }

  // associate_ipv6_address - computed: false, optional: true, required: false
  private _associateIpv6Address?: boolean | cdktf.IResolvable; 
  public get associateIpv6Address() {
    return this.getBooleanAttribute('associate_ipv6_address');
  }
  public set associateIpv6Address(value: boolean | cdktf.IResolvable) {
    this._associateIpv6Address = value;
  }
  public resetAssociateIpv6Address() {
    this._associateIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateIpv6AddressInput() {
    return this._associateIpv6Address;
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // device_index - computed: false, optional: false, required: true
  private _deviceIndex?: string; 
  public get deviceIndex() {
    return this.getStringAttribute('device_index');
  }
  public set deviceIndex(value: string) {
    this._deviceIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
  }
}

export class ManagedInstanceAwsNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsNetworkInterface[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsNetworkInterfaceOutputReference {
    return new ManagedInstanceAwsNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedInstanceAwsResourceTagSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#should_tag_amis ManagedInstanceAws#should_tag_amis}
  */
  readonly shouldTagAmis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#should_tag_enis ManagedInstanceAws#should_tag_enis}
  */
  readonly shouldTagEnis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#should_tag_snapshots ManagedInstanceAws#should_tag_snapshots}
  */
  readonly shouldTagSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#should_tag_volumes ManagedInstanceAws#should_tag_volumes}
  */
  readonly shouldTagVolumes?: boolean | cdktf.IResolvable;
}

export function managedInstanceAwsResourceTagSpecificationToTerraform(struct?: ManagedInstanceAwsResourceTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_tag_amis: cdktf.booleanToTerraform(struct!.shouldTagAmis),
    should_tag_enis: cdktf.booleanToTerraform(struct!.shouldTagEnis),
    should_tag_snapshots: cdktf.booleanToTerraform(struct!.shouldTagSnapshots),
    should_tag_volumes: cdktf.booleanToTerraform(struct!.shouldTagVolumes),
  }
}

export class ManagedInstanceAwsResourceTagSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsResourceTagSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldTagAmis !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagAmis = this._shouldTagAmis;
    }
    if (this._shouldTagEnis !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagEnis = this._shouldTagEnis;
    }
    if (this._shouldTagSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagSnapshots = this._shouldTagSnapshots;
    }
    if (this._shouldTagVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTagVolumes = this._shouldTagVolumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsResourceTagSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldTagAmis = undefined;
      this._shouldTagEnis = undefined;
      this._shouldTagSnapshots = undefined;
      this._shouldTagVolumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldTagAmis = value.shouldTagAmis;
      this._shouldTagEnis = value.shouldTagEnis;
      this._shouldTagSnapshots = value.shouldTagSnapshots;
      this._shouldTagVolumes = value.shouldTagVolumes;
    }
  }

  // should_tag_amis - computed: false, optional: true, required: false
  private _shouldTagAmis?: boolean | cdktf.IResolvable; 
  public get shouldTagAmis() {
    return this.getBooleanAttribute('should_tag_amis');
  }
  public set shouldTagAmis(value: boolean | cdktf.IResolvable) {
    this._shouldTagAmis = value;
  }
  public resetShouldTagAmis() {
    this._shouldTagAmis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagAmisInput() {
    return this._shouldTagAmis;
  }

  // should_tag_enis - computed: false, optional: true, required: false
  private _shouldTagEnis?: boolean | cdktf.IResolvable; 
  public get shouldTagEnis() {
    return this.getBooleanAttribute('should_tag_enis');
  }
  public set shouldTagEnis(value: boolean | cdktf.IResolvable) {
    this._shouldTagEnis = value;
  }
  public resetShouldTagEnis() {
    this._shouldTagEnis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagEnisInput() {
    return this._shouldTagEnis;
  }

  // should_tag_snapshots - computed: false, optional: true, required: false
  private _shouldTagSnapshots?: boolean | cdktf.IResolvable; 
  public get shouldTagSnapshots() {
    return this.getBooleanAttribute('should_tag_snapshots');
  }
  public set shouldTagSnapshots(value: boolean | cdktf.IResolvable) {
    this._shouldTagSnapshots = value;
  }
  public resetShouldTagSnapshots() {
    this._shouldTagSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagSnapshotsInput() {
    return this._shouldTagSnapshots;
  }

  // should_tag_volumes - computed: false, optional: true, required: false
  private _shouldTagVolumes?: boolean | cdktf.IResolvable; 
  public get shouldTagVolumes() {
    return this.getBooleanAttribute('should_tag_volumes');
  }
  public set shouldTagVolumes(value: boolean | cdktf.IResolvable) {
    this._shouldTagVolumes = value;
  }
  public resetShouldTagVolumes() {
    this._shouldTagVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTagVolumesInput() {
    return this._shouldTagVolumes;
  }
}

export class ManagedInstanceAwsResourceTagSpecificationList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsResourceTagSpecification[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsResourceTagSpecificationOutputReference {
    return new ManagedInstanceAwsResourceTagSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedInstanceAwsRevertToSpot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#perform_at ManagedInstanceAws#perform_at}
  */
  readonly performAt: string;
}

export function managedInstanceAwsRevertToSpotToTerraform(struct?: ManagedInstanceAwsRevertToSpotOutputReference | ManagedInstanceAwsRevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
  }
}

export class ManagedInstanceAwsRevertToSpotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedInstanceAwsRevertToSpot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsRevertToSpot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
    }
  }

  // perform_at - computed: false, optional: false, required: true
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }
}
export interface ManagedInstanceAwsScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#cron_expression ManagedInstanceAws#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#frequency ManagedInstanceAws#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#is_enabled ManagedInstanceAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#start_time ManagedInstanceAws#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#task_type ManagedInstanceAws#task_type}
  */
  readonly taskType: string;
}

export function managedInstanceAwsScheduledTaskToTerraform(struct?: ManagedInstanceAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export class ManagedInstanceAwsScheduledTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsScheduledTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsScheduledTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._frequency = undefined;
      this._isEnabled = undefined;
      this._startTime = undefined;
      this._taskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._frequency = value.frequency;
      this._isEnabled = value.isEnabled;
      this._startTime = value.startTime;
      this._taskType = value.taskType;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }
}

export class ManagedInstanceAwsScheduledTaskList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsScheduledTask[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsScheduledTaskOutputReference {
    return new ManagedInstanceAwsScheduledTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedInstanceAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#key ManagedInstanceAws#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#value ManagedInstanceAws#value}
  */
  readonly value?: string;
}

export function managedInstanceAwsTagsToTerraform(struct?: ManagedInstanceAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ManagedInstanceAwsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedInstanceAwsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedInstanceAwsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagedInstanceAwsTagsList extends cdktf.ComplexList {
  public internalValue? : ManagedInstanceAwsTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedInstanceAwsTagsOutputReference {
    return new ManagedInstanceAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws spotinst_managed_instance_aws}
*/
export class ManagedInstanceAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_managed_instance_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedInstanceAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedInstanceAws to import
  * @param importFromId The id of the existing ManagedInstanceAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedInstanceAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_managed_instance_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/managed_instance_aws spotinst_managed_instance_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedInstanceAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedInstanceAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_managed_instance_aws',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.147.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoHealing = config.autoHealing;
    this._blockDevicesMode = config.blockDevicesMode;
    this._cpuCredits = config.cpuCredits;
    this._description = config.description;
    this._drainingTimeout = config.drainingTimeout;
    this._ebsOptimized = config.ebsOptimized;
    this._elasticIp = config.elasticIp;
    this._enableMonitoring = config.enableMonitoring;
    this._fallBackToOd = config.fallBackToOd;
    this._gracePeriod = config.gracePeriod;
    this._healthCheckType = config.healthCheckType;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceTypes = config.instanceTypes;
    this._keyPair = config.keyPair;
    this._lifeCycle = config.lifeCycle;
    this._minimumInstanceLifetime = config.minimumInstanceLifetime;
    this._name = config.name;
    this._optimizationWindows = config.optimizationWindows;
    this._orientation = config.orientation;
    this._persistBlockDevices = config.persistBlockDevices;
    this._persistPrivateIp = config.persistPrivateIp;
    this._persistRootDevice = config.persistRootDevice;
    this._placementTenancy = config.placementTenancy;
    this._preferredType = config.preferredType;
    this._privateIp = config.privateIp;
    this._product = config.product;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._shutdownScript = config.shutdownScript;
    this._subnetIds = config.subnetIds;
    this._unhealthyDuration = config.unhealthyDuration;
    this._userData = config.userData;
    this._utilizeReservedInstances = config.utilizeReservedInstances;
    this._vpcId = config.vpcId;
    this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
    this._delete.internalValue = config.delete;
    this._integrationRoute53.internalValue = config.integrationRoute53;
    this._loadBalancers.internalValue = config.loadBalancers;
    this._managedInstanceAction.internalValue = config.managedInstanceAction;
    this._networkInterface.internalValue = config.networkInterface;
    this._resourceTagSpecification.internalValue = config.resourceTagSpecification;
    this._revertToSpot.internalValue = config.revertToSpot;
    this._scheduledTask.internalValue = config.scheduledTask;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
  }

  // block_devices_mode - computed: false, optional: true, required: false
  private _blockDevicesMode?: string; 
  public get blockDevicesMode() {
    return this.getStringAttribute('block_devices_mode');
  }
  public set blockDevicesMode(value: string) {
    this._blockDevicesMode = value;
  }
  public resetBlockDevicesMode() {
    this._blockDevicesMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDevicesModeInput() {
    return this._blockDevicesMode;
  }

  // cpu_credits - computed: false, optional: true, required: false
  private _cpuCredits?: string; 
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
  public set cpuCredits(value: string) {
    this._cpuCredits = value;
  }
  public resetCpuCredits() {
    this._cpuCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCreditsInput() {
    return this._cpuCredits;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // draining_timeout - computed: false, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // ebs_optimized - computed: true, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // elastic_ip - computed: false, optional: true, required: false
  private _elasticIp?: string; 
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }
  public set elasticIp(value: string) {
    this._elasticIp = value;
  }
  public resetElasticIp() {
    this._elasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpInput() {
    return this._elasticIp;
  }

  // enable_monitoring - computed: false, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring;
  }

  // fall_back_to_od - computed: false, optional: true, required: false
  private _fallBackToOd?: boolean | cdktf.IResolvable; 
  public get fallBackToOd() {
    return this.getBooleanAttribute('fall_back_to_od');
  }
  public set fallBackToOd(value: boolean | cdktf.IResolvable) {
    this._fallBackToOd = value;
  }
  public resetFallBackToOd() {
    this._fallBackToOd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackToOdInput() {
    return this._fallBackToOd;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_types - computed: false, optional: false, required: true
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
  }

  // life_cycle - computed: false, optional: true, required: false
  private _lifeCycle?: string; 
  public get lifeCycle() {
    return this.getStringAttribute('life_cycle');
  }
  public set lifeCycle(value: string) {
    this._lifeCycle = value;
  }
  public resetLifeCycle() {
    this._lifeCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleInput() {
    return this._lifeCycle;
  }

  // minimum_instance_lifetime - computed: false, optional: true, required: false
  private _minimumInstanceLifetime?: number; 
  public get minimumInstanceLifetime() {
    return this.getNumberAttribute('minimum_instance_lifetime');
  }
  public set minimumInstanceLifetime(value: number) {
    this._minimumInstanceLifetime = value;
  }
  public resetMinimumInstanceLifetime() {
    this._minimumInstanceLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInstanceLifetimeInput() {
    return this._minimumInstanceLifetime;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optimization_windows - computed: false, optional: true, required: false
  private _optimizationWindows?: string[]; 
  public get optimizationWindows() {
    return this.getListAttribute('optimization_windows');
  }
  public set optimizationWindows(value: string[]) {
    this._optimizationWindows = value;
  }
  public resetOptimizationWindows() {
    this._optimizationWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationWindowsInput() {
    return this._optimizationWindows;
  }

  // orientation - computed: false, optional: true, required: false
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  public resetOrientation() {
    this._orientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
  }

  // persist_block_devices - computed: false, optional: false, required: true
  private _persistBlockDevices?: boolean | cdktf.IResolvable; 
  public get persistBlockDevices() {
    return this.getBooleanAttribute('persist_block_devices');
  }
  public set persistBlockDevices(value: boolean | cdktf.IResolvable) {
    this._persistBlockDevices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistBlockDevicesInput() {
    return this._persistBlockDevices;
  }

  // persist_private_ip - computed: false, optional: true, required: false
  private _persistPrivateIp?: boolean | cdktf.IResolvable; 
  public get persistPrivateIp() {
    return this.getBooleanAttribute('persist_private_ip');
  }
  public set persistPrivateIp(value: boolean | cdktf.IResolvable) {
    this._persistPrivateIp = value;
  }
  public resetPersistPrivateIp() {
    this._persistPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistPrivateIpInput() {
    return this._persistPrivateIp;
  }

  // persist_root_device - computed: false, optional: true, required: false
  private _persistRootDevice?: boolean | cdktf.IResolvable; 
  public get persistRootDevice() {
    return this.getBooleanAttribute('persist_root_device');
  }
  public set persistRootDevice(value: boolean | cdktf.IResolvable) {
    this._persistRootDevice = value;
  }
  public resetPersistRootDevice() {
    this._persistRootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistRootDeviceInput() {
    return this._persistRootDevice;
  }

  // placement_tenancy - computed: false, optional: true, required: false
  private _placementTenancy?: string; 
  public get placementTenancy() {
    return this.getStringAttribute('placement_tenancy');
  }
  public set placementTenancy(value: string) {
    this._placementTenancy = value;
  }
  public resetPlacementTenancy() {
    this._placementTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTenancyInput() {
    return this._placementTenancy;
  }

  // preferred_type - computed: false, optional: true, required: false
  private _preferredType?: string; 
  public get preferredType() {
    return this.getStringAttribute('preferred_type');
  }
  public set preferredType(value: string) {
    this._preferredType = value;
  }
  public resetPreferredType() {
    this._preferredType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredTypeInput() {
    return this._preferredType;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // shutdown_script - computed: false, optional: true, required: false
  private _shutdownScript?: string; 
  public get shutdownScript() {
    return this.getStringAttribute('shutdown_script');
  }
  public set shutdownScript(value: string) {
    this._shutdownScript = value;
  }
  public resetShutdownScript() {
    this._shutdownScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownScriptInput() {
    return this._shutdownScript;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // unhealthy_duration - computed: false, optional: true, required: false
  private _unhealthyDuration?: number; 
  public get unhealthyDuration() {
    return this.getNumberAttribute('unhealthy_duration');
  }
  public set unhealthyDuration(value: number) {
    this._unhealthyDuration = value;
  }
  public resetUnhealthyDuration() {
    this._unhealthyDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyDurationInput() {
    return this._unhealthyDuration;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // utilize_reserved_instances - computed: false, optional: true, required: false
  private _utilizeReservedInstances?: boolean | cdktf.IResolvable; 
  public get utilizeReservedInstances() {
    return this.getBooleanAttribute('utilize_reserved_instances');
  }
  public set utilizeReservedInstances(value: boolean | cdktf.IResolvable) {
    this._utilizeReservedInstances = value;
  }
  public resetUtilizeReservedInstances() {
    this._utilizeReservedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizeReservedInstancesInput() {
    return this._utilizeReservedInstances;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings = new ManagedInstanceAwsBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public putBlockDeviceMappings(value: ManagedInstanceAwsBlockDeviceMappings[] | cdktf.IResolvable) {
    this._blockDeviceMappings.internalValue = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings.internalValue;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new ManagedInstanceAwsDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: ManagedInstanceAwsDelete[] | cdktf.IResolvable) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // integration_route53 - computed: false, optional: true, required: false
  private _integrationRoute53 = new ManagedInstanceAwsIntegrationRoute53OutputReference(this, "integration_route53");
  public get integrationRoute53() {
    return this._integrationRoute53;
  }
  public putIntegrationRoute53(value: ManagedInstanceAwsIntegrationRoute53) {
    this._integrationRoute53.internalValue = value;
  }
  public resetIntegrationRoute53() {
    this._integrationRoute53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRoute53Input() {
    return this._integrationRoute53.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers = new ManagedInstanceAwsLoadBalancersList(this, "load_balancers", true);
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public putLoadBalancers(value: ManagedInstanceAwsLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers.internalValue = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers.internalValue;
  }

  // managed_instance_action - computed: false, optional: true, required: false
  private _managedInstanceAction = new ManagedInstanceAwsManagedInstanceActionOutputReference(this, "managed_instance_action");
  public get managedInstanceAction() {
    return this._managedInstanceAction;
  }
  public putManagedInstanceAction(value: ManagedInstanceAwsManagedInstanceAction) {
    this._managedInstanceAction.internalValue = value;
  }
  public resetManagedInstanceAction() {
    this._managedInstanceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceActionInput() {
    return this._managedInstanceAction.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new ManagedInstanceAwsNetworkInterfaceList(this, "network_interface", true);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ManagedInstanceAwsNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // resource_tag_specification - computed: false, optional: true, required: false
  private _resourceTagSpecification = new ManagedInstanceAwsResourceTagSpecificationList(this, "resource_tag_specification", false);
  public get resourceTagSpecification() {
    return this._resourceTagSpecification;
  }
  public putResourceTagSpecification(value: ManagedInstanceAwsResourceTagSpecification[] | cdktf.IResolvable) {
    this._resourceTagSpecification.internalValue = value;
  }
  public resetResourceTagSpecification() {
    this._resourceTagSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagSpecificationInput() {
    return this._resourceTagSpecification.internalValue;
  }

  // revert_to_spot - computed: false, optional: true, required: false
  private _revertToSpot = new ManagedInstanceAwsRevertToSpotOutputReference(this, "revert_to_spot");
  public get revertToSpot() {
    return this._revertToSpot;
  }
  public putRevertToSpot(value: ManagedInstanceAwsRevertToSpot) {
    this._revertToSpot.internalValue = value;
  }
  public resetRevertToSpot() {
    this._revertToSpot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertToSpotInput() {
    return this._revertToSpot.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask = new ManagedInstanceAwsScheduledTaskList(this, "scheduled_task", true);
  public get scheduledTask() {
    return this._scheduledTask;
  }
  public putScheduledTask(value: ManagedInstanceAwsScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask.internalValue = value;
  }
  public resetScheduledTask() {
    this._scheduledTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ManagedInstanceAwsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ManagedInstanceAwsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_healing: cdktf.booleanToTerraform(this._autoHealing),
      block_devices_mode: cdktf.stringToTerraform(this._blockDevicesMode),
      cpu_credits: cdktf.stringToTerraform(this._cpuCredits),
      description: cdktf.stringToTerraform(this._description),
      draining_timeout: cdktf.numberToTerraform(this._drainingTimeout),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      elastic_ip: cdktf.stringToTerraform(this._elasticIp),
      enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
      fall_back_to_od: cdktf.booleanToTerraform(this._fallBackToOd),
      grace_period: cdktf.numberToTerraform(this._gracePeriod),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      life_cycle: cdktf.stringToTerraform(this._lifeCycle),
      minimum_instance_lifetime: cdktf.numberToTerraform(this._minimumInstanceLifetime),
      name: cdktf.stringToTerraform(this._name),
      optimization_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optimizationWindows),
      orientation: cdktf.stringToTerraform(this._orientation),
      persist_block_devices: cdktf.booleanToTerraform(this._persistBlockDevices),
      persist_private_ip: cdktf.booleanToTerraform(this._persistPrivateIp),
      persist_root_device: cdktf.booleanToTerraform(this._persistRootDevice),
      placement_tenancy: cdktf.stringToTerraform(this._placementTenancy),
      preferred_type: cdktf.stringToTerraform(this._preferredType),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      product: cdktf.stringToTerraform(this._product),
      region: cdktf.stringToTerraform(this._region),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      unhealthy_duration: cdktf.numberToTerraform(this._unhealthyDuration),
      user_data: cdktf.stringToTerraform(this._userData),
      utilize_reserved_instances: cdktf.booleanToTerraform(this._utilizeReservedInstances),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      block_device_mappings: cdktf.listMapper(managedInstanceAwsBlockDeviceMappingsToTerraform, true)(this._blockDeviceMappings.internalValue),
      delete: cdktf.listMapper(managedInstanceAwsDeleteToTerraform, true)(this._delete.internalValue),
      integration_route53: managedInstanceAwsIntegrationRoute53ToTerraform(this._integrationRoute53.internalValue),
      load_balancers: cdktf.listMapper(managedInstanceAwsLoadBalancersToTerraform, true)(this._loadBalancers.internalValue),
      managed_instance_action: managedInstanceAwsManagedInstanceActionToTerraform(this._managedInstanceAction.internalValue),
      network_interface: cdktf.listMapper(managedInstanceAwsNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      resource_tag_specification: cdktf.listMapper(managedInstanceAwsResourceTagSpecificationToTerraform, true)(this._resourceTagSpecification.internalValue),
      revert_to_spot: managedInstanceAwsRevertToSpotToTerraform(this._revertToSpot.internalValue),
      scheduled_task: cdktf.listMapper(managedInstanceAwsScheduledTaskToTerraform, true)(this._scheduledTask.internalValue),
      tags: cdktf.listMapper(managedInstanceAwsTagsToTerraform, true)(this._tags.internalValue),
    };
  }
}
