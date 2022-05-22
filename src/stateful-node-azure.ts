// https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatefulNodeAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}
  */
  readonly dataDisksPersistenceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}
  */
  readonly odSizes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}
  */
  readonly osDiskPersistenceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}
  */
  readonly preferredSpotSizes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}
  */
  readonly preferredZones?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}
  */
  readonly shouldPersistDataDisks: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}
  */
  readonly shouldPersistNetwork: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}
  */
  readonly shouldPersistOsDisk: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}
  */
  readonly shouldPersistVm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}
  */
  readonly spotSizes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}
  */
  readonly zones?: string[];
  /**
  * attach_data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#attach_data_disk StatefulNodeAzure#attach_data_disk}
  */
  readonly attachDataDisk?: StatefulNodeAzureAttachDataDisk[] | cdktf.IResolvable;
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#boot_diagnostics StatefulNodeAzure#boot_diagnostics}
  */
  readonly bootDiagnostics?: StatefulNodeAzureBootDiagnostics[] | cdktf.IResolvable;
  /**
  * data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk StatefulNodeAzure#data_disk}
  */
  readonly dataDisk?: StatefulNodeAzureDataDisk[] | cdktf.IResolvable;
  /**
  * delete block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#delete StatefulNodeAzure#delete}
  */
  readonly delete?: StatefulNodeAzureDelete[] | cdktf.IResolvable;
  /**
  * detach_data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#detach_data_disk StatefulNodeAzure#detach_data_disk}
  */
  readonly detachDataDisk?: StatefulNodeAzureDetachDataDisk[] | cdktf.IResolvable;
  /**
  * extension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#extension StatefulNodeAzure#extension}
  */
  readonly extension?: StatefulNodeAzureExtension[] | cdktf.IResolvable;
  /**
  * health block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health StatefulNodeAzure#health}
  */
  readonly health?: StatefulNodeAzureHealth;
  /**
  * image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image StatefulNodeAzure#image}
  */
  readonly image: StatefulNodeAzureImage;
  /**
  * import_vm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#import_vm StatefulNodeAzure#import_vm}
  */
  readonly importVm?: StatefulNodeAzureImportVm[] | cdktf.IResolvable;
  /**
  * load_balancer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#load_balancer StatefulNodeAzure#load_balancer}
  */
  readonly loadBalancer?: StatefulNodeAzureLoadBalancer[] | cdktf.IResolvable;
  /**
  * login block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#login StatefulNodeAzure#login}
  */
  readonly login: StatefulNodeAzureLogin;
  /**
  * managed_service_identities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#managed_service_identities StatefulNodeAzure#managed_service_identities}
  */
  readonly managedServiceIdentities?: StatefulNodeAzureManagedServiceIdentities[] | cdktf.IResolvable;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network StatefulNodeAzure#network}
  */
  readonly network: StatefulNodeAzureNetwork;
  /**
  * os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk StatefulNodeAzure#os_disk}
  */
  readonly osDisk?: StatefulNodeAzureOsDisk;
  /**
  * scheduling_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#scheduling_task StatefulNodeAzure#scheduling_task}
  */
  readonly schedulingTask?: StatefulNodeAzureSchedulingTask[] | cdktf.IResolvable;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#secret StatefulNodeAzure#secret}
  */
  readonly secret?: StatefulNodeAzureSecret[] | cdktf.IResolvable;
  /**
  * signal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#signal StatefulNodeAzure#signal}
  */
  readonly signal?: StatefulNodeAzureSignal[] | cdktf.IResolvable;
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#strategy StatefulNodeAzure#strategy}
  */
  readonly strategy: StatefulNodeAzureStrategy;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag StatefulNodeAzure#tag}
  */
  readonly tag?: StatefulNodeAzureTag[] | cdktf.IResolvable;
  /**
  * update_state block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#update_state StatefulNodeAzure#update_state}
  */
  readonly updateState?: StatefulNodeAzureUpdateState[] | cdktf.IResolvable;
}
export interface StatefulNodeAzureAttachDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}
  */
  readonly dataDiskName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}
  */
  readonly dataDiskResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}
  */
  readonly lun?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zone StatefulNodeAzure#zone}
  */
  readonly zone?: string;
}

export function statefulNodeAzureAttachDataDiskToTerraform(struct?: StatefulNodeAzureAttachDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_disk_name: cdktf.stringToTerraform(struct!.dataDiskName),
    data_disk_resource_group_name: cdktf.stringToTerraform(struct!.dataDiskResourceGroupName),
    lun: cdktf.numberToTerraform(struct!.lun),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export interface StatefulNodeAzureBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}
  */
  readonly storageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type?: string;
}

export function statefulNodeAzureBootDiagnosticsToTerraform(struct?: StatefulNodeAzureBootDiagnostics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    storage_url: cdktf.stringToTerraform(struct!.storageUrl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StatefulNodeAzureDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureDataDiskToTerraform(struct?: StatefulNodeAzureDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lun: cdktf.numberToTerraform(struct!.lun),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StatefulNodeAzureDelete {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}
  */
  readonly diskShouldDeallocate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}
  */
  readonly diskTtlInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}
  */
  readonly networkShouldDeallocate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}
  */
  readonly networkTtlInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}
  */
  readonly publicIpShouldDeallocate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}
  */
  readonly publicIpTtlInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}
  */
  readonly shouldTerminateVm: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}
  */
  readonly snapshotShouldDeallocate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}
  */
  readonly snapshotTtlInHours?: number;
}

export function statefulNodeAzureDeleteToTerraform(struct?: StatefulNodeAzureDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_should_deallocate: cdktf.booleanToTerraform(struct!.diskShouldDeallocate),
    disk_ttl_in_hours: cdktf.numberToTerraform(struct!.diskTtlInHours),
    network_should_deallocate: cdktf.booleanToTerraform(struct!.networkShouldDeallocate),
    network_ttl_in_hours: cdktf.numberToTerraform(struct!.networkTtlInHours),
    public_ip_should_deallocate: cdktf.booleanToTerraform(struct!.publicIpShouldDeallocate),
    public_ip_ttl_in_hours: cdktf.numberToTerraform(struct!.publicIpTtlInHours),
    should_terminate_vm: cdktf.booleanToTerraform(struct!.shouldTerminateVm),
    snapshot_should_deallocate: cdktf.booleanToTerraform(struct!.snapshotShouldDeallocate),
    snapshot_ttl_in_hours: cdktf.numberToTerraform(struct!.snapshotTtlInHours),
  }
}

export interface StatefulNodeAzureDetachDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}
  */
  readonly dataDiskName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}
  */
  readonly dataDiskResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}
  */
  readonly shouldDeallocate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}
  */
  readonly ttlInHours?: number;
}

export function statefulNodeAzureDetachDataDiskToTerraform(struct?: StatefulNodeAzureDetachDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_disk_name: cdktf.stringToTerraform(struct!.dataDiskName),
    data_disk_resource_group_name: cdktf.stringToTerraform(struct!.dataDiskResourceGroupName),
    should_deallocate: cdktf.booleanToTerraform(struct!.shouldDeallocate),
    ttl_in_hours: cdktf.numberToTerraform(struct!.ttlInHours),
  }
}

export interface StatefulNodeAzureExtension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#api_version StatefulNodeAzure#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}
  */
  readonly minorVersionAutoUpgrade: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}
  */
  readonly protectedSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}
  */
  readonly publicSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureExtensionToTerraform(struct?: StatefulNodeAzureExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    minor_version_auto_upgrade: cdktf.booleanToTerraform(struct!.minorVersionAutoUpgrade),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.protectedSettings),
    public_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.publicSettings),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StatefulNodeAzureHealth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}
  */
  readonly autoHealing: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}
  */
  readonly healthCheckTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}
  */
  readonly unhealthyDuration?: number;
}

export function statefulNodeAzureHealthToTerraform(struct?: StatefulNodeAzureHealthOutputReference | StatefulNodeAzureHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_healing: cdktf.booleanToTerraform(struct!.autoHealing),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    health_check_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.healthCheckTypes),
    unhealthy_duration: cdktf.numberToTerraform(struct!.unhealthyDuration),
  }
}

export class StatefulNodeAzureHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHealing !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHealing = this._autoHealing;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._healthCheckTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckTypes = this._healthCheckTypes;
    }
    if (this._unhealthyDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyDuration = this._unhealthyDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHealing = undefined;
      this._gracePeriod = undefined;
      this._healthCheckTypes = undefined;
      this._unhealthyDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHealing = value.autoHealing;
      this._gracePeriod = value.gracePeriod;
      this._healthCheckTypes = value.healthCheckTypes;
      this._unhealthyDuration = value.unhealthyDuration;
    }
  }

  // auto_healing - computed: false, optional: false, required: true
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
  }

  // grace_period - computed: true, optional: true, required: false
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

  // health_check_types - computed: false, optional: false, required: true
  private _healthCheckTypes?: string[]; 
  public get healthCheckTypes() {
    return this.getListAttribute('health_check_types');
  }
  public set healthCheckTypes(value: string[]) {
    this._healthCheckTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypesInput() {
    return this._healthCheckTypes;
  }

  // unhealthy_duration - computed: true, optional: true, required: false
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
}
export interface StatefulNodeAzureImageCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}
  */
  readonly customImageResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
}

export function statefulNodeAzureImageCustomImageToTerraform(struct?: StatefulNodeAzureImageCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_image_resource_group_name: cdktf.stringToTerraform(struct!.customImageResourceGroupName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface StatefulNodeAzureImageGallery {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}
  */
  readonly galleryResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image_name StatefulNodeAzure#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version_name StatefulNodeAzure#version_name}
  */
  readonly versionName: string;
}

export function statefulNodeAzureImageGalleryToTerraform(struct?: StatefulNodeAzureImageGallery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gallery_name: cdktf.stringToTerraform(struct!.galleryName),
    gallery_resource_group_name: cdktf.stringToTerraform(struct!.galleryResourceGroupName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    version_name: cdktf.stringToTerraform(struct!.versionName),
  }
}

export interface StatefulNodeAzureImageMarketplaceImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#offer StatefulNodeAzure#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version StatefulNodeAzure#version}
  */
  readonly version: string;
}

export function statefulNodeAzureImageMarketplaceImageToTerraform(struct?: StatefulNodeAzureImageMarketplaceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface StatefulNodeAzureImage {
  /**
  * custom_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image StatefulNodeAzure#custom_image}
  */
  readonly customImage?: StatefulNodeAzureImageCustomImage[] | cdktf.IResolvable;
  /**
  * gallery block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery StatefulNodeAzure#gallery}
  */
  readonly gallery?: StatefulNodeAzureImageGallery[] | cdktf.IResolvable;
  /**
  * marketplace_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#marketplace_image StatefulNodeAzure#marketplace_image}
  */
  readonly marketplaceImage?: StatefulNodeAzureImageMarketplaceImage[] | cdktf.IResolvable;
}

export function statefulNodeAzureImageToTerraform(struct?: StatefulNodeAzureImageOutputReference | StatefulNodeAzureImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_image: cdktf.listMapper(statefulNodeAzureImageCustomImageToTerraform)(struct!.customImage),
    gallery: cdktf.listMapper(statefulNodeAzureImageGalleryToTerraform)(struct!.gallery),
    marketplace_image: cdktf.listMapper(statefulNodeAzureImageMarketplaceImageToTerraform)(struct!.marketplaceImage),
  }
}

export class StatefulNodeAzureImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage;
    }
    if (this._gallery !== undefined) {
      hasAnyValues = true;
      internalValueResult.gallery = this._gallery;
    }
    if (this._marketplaceImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketplaceImage = this._marketplaceImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customImage = undefined;
      this._gallery = undefined;
      this._marketplaceImage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customImage = value.customImage;
      this._gallery = value.gallery;
      this._marketplaceImage = value.marketplaceImage;
    }
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage?: StatefulNodeAzureImageCustomImage[] | cdktf.IResolvable; 
  public get customImage() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_image');
  }
  public set customImage(value: StatefulNodeAzureImageCustomImage[] | cdktf.IResolvable) {
    this._customImage = value;
  }
  public resetCustomImage() {
    this._customImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage;
  }

  // gallery - computed: false, optional: true, required: false
  private _gallery?: StatefulNodeAzureImageGallery[] | cdktf.IResolvable; 
  public get gallery() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('gallery');
  }
  public set gallery(value: StatefulNodeAzureImageGallery[] | cdktf.IResolvable) {
    this._gallery = value;
  }
  public resetGallery() {
    this._gallery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryInput() {
    return this._gallery;
  }

  // marketplace_image - computed: false, optional: true, required: false
  private _marketplaceImage?: StatefulNodeAzureImageMarketplaceImage[] | cdktf.IResolvable; 
  public get marketplaceImage() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('marketplace_image');
  }
  public set marketplaceImage(value: StatefulNodeAzureImageMarketplaceImage[] | cdktf.IResolvable) {
    this._marketplaceImage = value;
  }
  public resetMarketplaceImage() {
    this._marketplaceImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketplaceImageInput() {
    return this._marketplaceImage;
  }
}
export interface StatefulNodeAzureImportVm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}
  */
  readonly originalVmName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}
  */
  readonly resourcesRetentionTime?: number;
}

export function statefulNodeAzureImportVmToTerraform(struct?: StatefulNodeAzureImportVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    original_vm_name: cdktf.stringToTerraform(struct!.originalVmName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    resources_retention_time: cdktf.numberToTerraform(struct!.resourcesRetentionTime),
  }
}

export interface StatefulNodeAzureLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}
  */
  readonly backendPoolNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureLoadBalancerToTerraform(struct?: StatefulNodeAzureLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pool_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.backendPoolNames),
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    sku: cdktf.stringToTerraform(struct!.sku),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StatefulNodeAzureLogin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#password StatefulNodeAzure#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#user_name StatefulNodeAzure#user_name}
  */
  readonly userName: string;
}

export function statefulNodeAzureLoginToTerraform(struct?: StatefulNodeAzureLoginOutputReference | StatefulNodeAzureLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export class StatefulNodeAzureLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshPublicKey = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshPublicKey = value.sshPublicKey;
      this._userName = value.userName;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_public_key - computed: true, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface StatefulNodeAzureManagedServiceIdentities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function statefulNodeAzureManagedServiceIdentitiesToTerraform(struct?: StatefulNodeAzureManagedServiceIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export interface StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}
  */
  readonly privateIpAddressVersion: string;
}

export function statefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_address_version: cdktf.stringToTerraform(struct!.privateIpAddressVersion),
  }
}

export interface StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}
  */
  readonly networkResourceGroupName: string;
}

export function statefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
  }
}

export interface StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}
  */
  readonly networkResourceGroupName?: string;
}

export function statefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
  }
}

export interface StatefulNodeAzureNetworkNetworkInterfacePublicIps {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}
  */
  readonly networkResourceGroupName: string;
}

export function statefulNodeAzureNetworkNetworkInterfacePublicIpsToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterfacePublicIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
  }
}

export interface StatefulNodeAzureNetworkNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}
  */
  readonly privateIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}
  */
  readonly publicIpSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}
  */
  readonly subnetName: string;
  /**
  * additional_ip_configurations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#additional_ip_configurations StatefulNodeAzure#additional_ip_configurations}
  */
  readonly additionalIpConfigurations?: StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations[] | cdktf.IResolvable;
  /**
  * application_security_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#application_security_groups StatefulNodeAzure#application_security_groups}
  */
  readonly applicationSecurityGroups?: StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups[] | cdktf.IResolvable;
  /**
  * network_security_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_security_group StatefulNodeAzure#network_security_group}
  */
  readonly networkSecurityGroup?: StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup[] | cdktf.IResolvable;
  /**
  * public_ips block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ips StatefulNodeAzure#public_ips}
  */
  readonly publicIps?: StatefulNodeAzureNetworkNetworkInterfacePublicIps[] | cdktf.IResolvable;
}

export function statefulNodeAzureNetworkNetworkInterfaceToTerraform(struct?: StatefulNodeAzureNetworkNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.privateIpAddresses),
    public_ip_sku: cdktf.stringToTerraform(struct!.publicIpSku),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    additional_ip_configurations: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsToTerraform)(struct!.additionalIpConfigurations),
    application_security_groups: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsToTerraform)(struct!.applicationSecurityGroups),
    network_security_group: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupToTerraform)(struct!.networkSecurityGroup),
    public_ips: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfacePublicIpsToTerraform)(struct!.publicIps),
  }
}

export interface StatefulNodeAzureNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}
  */
  readonly networkResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_interface StatefulNodeAzure#network_interface}
  */
  readonly networkInterface: StatefulNodeAzureNetworkNetworkInterface[] | cdktf.IResolvable;
}

export function statefulNodeAzureNetworkToTerraform(struct?: StatefulNodeAzureNetworkOutputReference | StatefulNodeAzureNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_resource_group_name: cdktf.stringToTerraform(struct!.networkResourceGroupName),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    network_interface: cdktf.listMapper(statefulNodeAzureNetworkNetworkInterfaceToTerraform)(struct!.networkInterface),
  }
}

export class StatefulNodeAzureNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkResourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResourceGroupName = this._networkResourceGroupName;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._networkInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkResourceGroupName = undefined;
      this._virtualNetworkName = undefined;
      this._networkInterface = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkResourceGroupName = value.networkResourceGroupName;
      this._virtualNetworkName = value.virtualNetworkName;
      this._networkInterface = value.networkInterface;
    }
  }

  // network_resource_group_name - computed: false, optional: false, required: true
  private _networkResourceGroupName?: string; 
  public get networkResourceGroupName() {
    return this.getStringAttribute('network_resource_group_name');
  }
  public set networkResourceGroupName(value: string) {
    this._networkResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceGroupNameInput() {
    return this._networkResourceGroupName;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface?: StatefulNodeAzureNetworkNetworkInterface[] | cdktf.IResolvable; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interface');
  }
  public set networkInterface(value: StatefulNodeAzureNetworkNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface;
  }
}
export interface StatefulNodeAzureOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}
  */
  readonly sizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureOsDiskToTerraform(struct?: StatefulNodeAzureOsDiskOutputReference | StatefulNodeAzureOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StatefulNodeAzureOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureOsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
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
export interface StatefulNodeAzureSchedulingTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureSchedulingTaskToTerraform(struct?: StatefulNodeAzureSchedulingTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StatefulNodeAzureSecretSourceVault {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function statefulNodeAzureSecretSourceVaultToTerraform(struct?: StatefulNodeAzureSecretSourceVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export interface StatefulNodeAzureSecretVaultCertificates {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}
  */
  readonly certificateStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}
  */
  readonly certificateUrl?: string;
}

export function statefulNodeAzureSecretVaultCertificatesToTerraform(struct?: StatefulNodeAzureSecretVaultCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
  }
}

export interface StatefulNodeAzureSecret {
  /**
  * source_vault block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#source_vault StatefulNodeAzure#source_vault}
  */
  readonly sourceVault: StatefulNodeAzureSecretSourceVault[] | cdktf.IResolvable;
  /**
  * vault_certificates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#vault_certificates StatefulNodeAzure#vault_certificates}
  */
  readonly vaultCertificates: StatefulNodeAzureSecretVaultCertificates[] | cdktf.IResolvable;
}

export function statefulNodeAzureSecretToTerraform(struct?: StatefulNodeAzureSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_vault: cdktf.listMapper(statefulNodeAzureSecretSourceVaultToTerraform)(struct!.sourceVault),
    vault_certificates: cdktf.listMapper(statefulNodeAzureSecretVaultCertificatesToTerraform)(struct!.vaultCertificates),
  }
}

export interface StatefulNodeAzureSignal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#timeout StatefulNodeAzure#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}
  */
  readonly type: string;
}

export function statefulNodeAzureSignalToTerraform(struct?: StatefulNodeAzureSignal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StatefulNodeAzureStrategyRevertToSpot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}
  */
  readonly performAt: string;
}

export function statefulNodeAzureStrategyRevertToSpotToTerraform(struct?: StatefulNodeAzureStrategyRevertToSpotOutputReference | StatefulNodeAzureStrategyRevertToSpot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
  }
}

export class StatefulNodeAzureStrategyRevertToSpotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureStrategyRevertToSpot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureStrategyRevertToSpot | undefined) {
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
export interface StatefulNodeAzureStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}
  */
  readonly fallbackToOnDemand: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}
  */
  readonly optimizationWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}
  */
  readonly preferredLifeCycle?: string;
  /**
  * revert_to_spot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#revert_to_spot StatefulNodeAzure#revert_to_spot}
  */
  readonly revertToSpot?: StatefulNodeAzureStrategyRevertToSpot;
}

export function statefulNodeAzureStrategyToTerraform(struct?: StatefulNodeAzureStrategyOutputReference | StatefulNodeAzureStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    fallback_to_on_demand: cdktf.booleanToTerraform(struct!.fallbackToOnDemand),
    optimization_windows: cdktf.listMapper(cdktf.stringToTerraform)(struct!.optimizationWindows),
    preferred_life_cycle: cdktf.stringToTerraform(struct!.preferredLifeCycle),
    revert_to_spot: statefulNodeAzureStrategyRevertToSpotToTerraform(struct!.revertToSpot),
  }
}

export class StatefulNodeAzureStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulNodeAzureStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._fallbackToOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToOnDemand = this._fallbackToOnDemand;
    }
    if (this._optimizationWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationWindows = this._optimizationWindows;
    }
    if (this._preferredLifeCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifeCycle = this._preferredLifeCycle;
    }
    if (this._revertToSpot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revertToSpot = this._revertToSpot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulNodeAzureStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainingTimeout = undefined;
      this._fallbackToOnDemand = undefined;
      this._optimizationWindows = undefined;
      this._preferredLifeCycle = undefined;
      this._revertToSpot.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainingTimeout = value.drainingTimeout;
      this._fallbackToOnDemand = value.fallbackToOnDemand;
      this._optimizationWindows = value.optimizationWindows;
      this._preferredLifeCycle = value.preferredLifeCycle;
      this._revertToSpot.internalValue = value.revertToSpot;
    }
  }

  // draining_timeout - computed: true, optional: true, required: false
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

  // fallback_to_on_demand - computed: false, optional: false, required: true
  private _fallbackToOnDemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOnDemand() {
    return this.getBooleanAttribute('fallback_to_on_demand');
  }
  public set fallbackToOnDemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOnDemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOnDemandInput() {
    return this._fallbackToOnDemand;
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

  // preferred_life_cycle - computed: true, optional: true, required: false
  private _preferredLifeCycle?: string; 
  public get preferredLifeCycle() {
    return this.getStringAttribute('preferred_life_cycle');
  }
  public set preferredLifeCycle(value: string) {
    this._preferredLifeCycle = value;
  }
  public resetPreferredLifeCycle() {
    this._preferredLifeCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifeCycleInput() {
    return this._preferredLifeCycle;
  }

  // revert_to_spot - computed: false, optional: true, required: false
  private _revertToSpot = new StatefulNodeAzureStrategyRevertToSpotOutputReference(this, "revert_to_spot");
  public get revertToSpot() {
    return this._revertToSpot;
  }
  public putRevertToSpot(value: StatefulNodeAzureStrategyRevertToSpot) {
    this._revertToSpot.internalValue = value;
  }
  public resetRevertToSpot() {
    this._revertToSpot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertToSpotInput() {
    return this._revertToSpot.internalValue;
  }
}
export interface StatefulNodeAzureTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}
  */
  readonly tagValue?: string;
}

export function statefulNodeAzureTagToTerraform(struct?: StatefulNodeAzureTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}

export interface StatefulNodeAzureUpdateState {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#state StatefulNodeAzure#state}
  */
  readonly state: string;
}

export function statefulNodeAzureUpdateStateToTerraform(struct?: StatefulNodeAzureUpdateState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure spotinst_stateful_node_azure}
*/
export class StatefulNodeAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_stateful_node_azure";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure spotinst_stateful_node_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatefulNodeAzureConfig
  */
  public constructor(scope: Construct, id: string, config: StatefulNodeAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_stateful_node_azure',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.74.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customData = config.customData;
    this._dataDisksPersistenceMode = config.dataDisksPersistenceMode;
    this._description = config.description;
    this._name = config.name;
    this._odSizes = config.odSizes;
    this._os = config.os;
    this._osDiskPersistenceMode = config.osDiskPersistenceMode;
    this._preferredSpotSizes = config.preferredSpotSizes;
    this._preferredZones = config.preferredZones;
    this._region = config.region;
    this._resourceGroupName = config.resourceGroupName;
    this._shouldPersistDataDisks = config.shouldPersistDataDisks;
    this._shouldPersistNetwork = config.shouldPersistNetwork;
    this._shouldPersistOsDisk = config.shouldPersistOsDisk;
    this._shouldPersistVm = config.shouldPersistVm;
    this._shutdownScript = config.shutdownScript;
    this._spotSizes = config.spotSizes;
    this._zones = config.zones;
    this._attachDataDisk = config.attachDataDisk;
    this._bootDiagnostics = config.bootDiagnostics;
    this._dataDisk = config.dataDisk;
    this._delete = config.delete;
    this._detachDataDisk = config.detachDataDisk;
    this._extension = config.extension;
    this._health.internalValue = config.health;
    this._image.internalValue = config.image;
    this._importVm = config.importVm;
    this._loadBalancer = config.loadBalancer;
    this._login.internalValue = config.login;
    this._managedServiceIdentities = config.managedServiceIdentities;
    this._network.internalValue = config.network;
    this._osDisk.internalValue = config.osDisk;
    this._schedulingTask = config.schedulingTask;
    this._secret = config.secret;
    this._signal = config.signal;
    this._strategy.internalValue = config.strategy;
    this._tag = config.tag;
    this._updateState = config.updateState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_data - computed: true, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // data_disks_persistence_mode - computed: true, optional: true, required: false
  private _dataDisksPersistenceMode?: string; 
  public get dataDisksPersistenceMode() {
    return this.getStringAttribute('data_disks_persistence_mode');
  }
  public set dataDisksPersistenceMode(value: string) {
    this._dataDisksPersistenceMode = value;
  }
  public resetDataDisksPersistenceMode() {
    this._dataDisksPersistenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksPersistenceModeInput() {
    return this._dataDisksPersistenceMode;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // od_sizes - computed: false, optional: false, required: true
  private _odSizes?: string[]; 
  public get odSizes() {
    return this.getListAttribute('od_sizes');
  }
  public set odSizes(value: string[]) {
    this._odSizes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odSizesInput() {
    return this._odSizes;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // os_disk_persistence_mode - computed: true, optional: true, required: false
  private _osDiskPersistenceMode?: string; 
  public get osDiskPersistenceMode() {
    return this.getStringAttribute('os_disk_persistence_mode');
  }
  public set osDiskPersistenceMode(value: string) {
    this._osDiskPersistenceMode = value;
  }
  public resetOsDiskPersistenceMode() {
    this._osDiskPersistenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskPersistenceModeInput() {
    return this._osDiskPersistenceMode;
  }

  // preferred_spot_sizes - computed: true, optional: true, required: false
  private _preferredSpotSizes?: string[]; 
  public get preferredSpotSizes() {
    return this.getListAttribute('preferred_spot_sizes');
  }
  public set preferredSpotSizes(value: string[]) {
    this._preferredSpotSizes = value;
  }
  public resetPreferredSpotSizes() {
    this._preferredSpotSizes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSpotSizesInput() {
    return this._preferredSpotSizes;
  }

  // preferred_zones - computed: true, optional: true, required: false
  private _preferredZones?: string; 
  public get preferredZones() {
    return this.getStringAttribute('preferred_zones');
  }
  public set preferredZones(value: string) {
    this._preferredZones = value;
  }
  public resetPreferredZones() {
    this._preferredZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredZonesInput() {
    return this._preferredZones;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // should_persist_data_disks - computed: false, optional: false, required: true
  private _shouldPersistDataDisks?: boolean | cdktf.IResolvable; 
  public get shouldPersistDataDisks() {
    return this.getBooleanAttribute('should_persist_data_disks');
  }
  public set shouldPersistDataDisks(value: boolean | cdktf.IResolvable) {
    this._shouldPersistDataDisks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPersistDataDisksInput() {
    return this._shouldPersistDataDisks;
  }

  // should_persist_network - computed: false, optional: false, required: true
  private _shouldPersistNetwork?: boolean | cdktf.IResolvable; 
  public get shouldPersistNetwork() {
    return this.getBooleanAttribute('should_persist_network');
  }
  public set shouldPersistNetwork(value: boolean | cdktf.IResolvable) {
    this._shouldPersistNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPersistNetworkInput() {
    return this._shouldPersistNetwork;
  }

  // should_persist_os_disk - computed: false, optional: false, required: true
  private _shouldPersistOsDisk?: boolean | cdktf.IResolvable; 
  public get shouldPersistOsDisk() {
    return this.getBooleanAttribute('should_persist_os_disk');
  }
  public set shouldPersistOsDisk(value: boolean | cdktf.IResolvable) {
    this._shouldPersistOsDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPersistOsDiskInput() {
    return this._shouldPersistOsDisk;
  }

  // should_persist_vm - computed: true, optional: true, required: false
  private _shouldPersistVm?: boolean | cdktf.IResolvable; 
  public get shouldPersistVm() {
    return this.getBooleanAttribute('should_persist_vm');
  }
  public set shouldPersistVm(value: boolean | cdktf.IResolvable) {
    this._shouldPersistVm = value;
  }
  public resetShouldPersistVm() {
    this._shouldPersistVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPersistVmInput() {
    return this._shouldPersistVm;
  }

  // shutdown_script - computed: true, optional: true, required: false
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

  // spot_sizes - computed: false, optional: false, required: true
  private _spotSizes?: string[]; 
  public get spotSizes() {
    return this.getListAttribute('spot_sizes');
  }
  public set spotSizes(value: string[]) {
    this._spotSizes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSizesInput() {
    return this._spotSizes;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // attach_data_disk - computed: false, optional: true, required: false
  private _attachDataDisk?: StatefulNodeAzureAttachDataDisk[] | cdktf.IResolvable; 
  public get attachDataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attach_data_disk');
  }
  public set attachDataDisk(value: StatefulNodeAzureAttachDataDisk[] | cdktf.IResolvable) {
    this._attachDataDisk = value;
  }
  public resetAttachDataDisk() {
    this._attachDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachDataDiskInput() {
    return this._attachDataDisk;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: StatefulNodeAzureBootDiagnostics[] | cdktf.IResolvable; 
  public get bootDiagnostics() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('boot_diagnostics');
  }
  public set bootDiagnostics(value: StatefulNodeAzureBootDiagnostics[] | cdktf.IResolvable) {
    this._bootDiagnostics = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: StatefulNodeAzureDataDisk[] | cdktf.IResolvable; 
  public get dataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data_disk');
  }
  public set dataDisk(value: StatefulNodeAzureDataDisk[] | cdktf.IResolvable) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: StatefulNodeAzureDelete[] | cdktf.IResolvable; 
  public get delete() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('delete');
  }
  public set delete(value: StatefulNodeAzureDelete[] | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // detach_data_disk - computed: false, optional: true, required: false
  private _detachDataDisk?: StatefulNodeAzureDetachDataDisk[] | cdktf.IResolvable; 
  public get detachDataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('detach_data_disk');
  }
  public set detachDataDisk(value: StatefulNodeAzureDetachDataDisk[] | cdktf.IResolvable) {
    this._detachDataDisk = value;
  }
  public resetDetachDataDisk() {
    this._detachDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachDataDiskInput() {
    return this._detachDataDisk;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: StatefulNodeAzureExtension[] | cdktf.IResolvable; 
  public get extension() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('extension')));
  }
  public set extension(value: StatefulNodeAzureExtension[] | cdktf.IResolvable) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // health - computed: false, optional: true, required: false
  private _health = new StatefulNodeAzureHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: StatefulNodeAzureHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new StatefulNodeAzureImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: StatefulNodeAzureImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // import_vm - computed: false, optional: true, required: false
  private _importVm?: StatefulNodeAzureImportVm[] | cdktf.IResolvable; 
  public get importVm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('import_vm');
  }
  public set importVm(value: StatefulNodeAzureImportVm[] | cdktf.IResolvable) {
    this._importVm = value;
  }
  public resetImportVm() {
    this._importVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importVmInput() {
    return this._importVm;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer?: StatefulNodeAzureLoadBalancer[] | cdktf.IResolvable; 
  public get loadBalancer() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('load_balancer')));
  }
  public set loadBalancer(value: StatefulNodeAzureLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
  }

  // login - computed: false, optional: false, required: true
  private _login = new StatefulNodeAzureLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: StatefulNodeAzureLogin) {
    this._login.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // managed_service_identities - computed: false, optional: true, required: false
  private _managedServiceIdentities?: StatefulNodeAzureManagedServiceIdentities[] | cdktf.IResolvable; 
  public get managedServiceIdentities() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('managed_service_identities')));
  }
  public set managedServiceIdentities(value: StatefulNodeAzureManagedServiceIdentities[] | cdktf.IResolvable) {
    this._managedServiceIdentities = value;
  }
  public resetManagedServiceIdentities() {
    this._managedServiceIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceIdentitiesInput() {
    return this._managedServiceIdentities;
  }

  // network - computed: false, optional: false, required: true
  private _network = new StatefulNodeAzureNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: StatefulNodeAzureNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk = new StatefulNodeAzureOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: StatefulNodeAzureOsDisk) {
    this._osDisk.internalValue = value;
  }
  public resetOsDisk() {
    this._osDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // scheduling_task - computed: false, optional: true, required: false
  private _schedulingTask?: StatefulNodeAzureSchedulingTask[] | cdktf.IResolvable; 
  public get schedulingTask() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduling_task')));
  }
  public set schedulingTask(value: StatefulNodeAzureSchedulingTask[] | cdktf.IResolvable) {
    this._schedulingTask = value;
  }
  public resetSchedulingTask() {
    this._schedulingTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTaskInput() {
    return this._schedulingTask;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: StatefulNodeAzureSecret[] | cdktf.IResolvable; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('secret')));
  }
  public set secret(value: StatefulNodeAzureSecret[] | cdktf.IResolvable) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // signal - computed: false, optional: true, required: false
  private _signal?: StatefulNodeAzureSignal[] | cdktf.IResolvable; 
  public get signal() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('signal');
  }
  public set signal(value: StatefulNodeAzureSignal[] | cdktf.IResolvable) {
    this._signal = value;
  }
  public resetSignal() {
    this._signal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy = new StatefulNodeAzureStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: StatefulNodeAzureStrategy) {
    this._strategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: StatefulNodeAzureTag[] | cdktf.IResolvable; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tag')));
  }
  public set tag(value: StatefulNodeAzureTag[] | cdktf.IResolvable) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // update_state - computed: false, optional: true, required: false
  private _updateState?: StatefulNodeAzureUpdateState[] | cdktf.IResolvable; 
  public get updateState() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('update_state');
  }
  public set updateState(value: StatefulNodeAzureUpdateState[] | cdktf.IResolvable) {
    this._updateState = value;
  }
  public resetUpdateState() {
    this._updateState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStateInput() {
    return this._updateState;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_data: cdktf.stringToTerraform(this._customData),
      data_disks_persistence_mode: cdktf.stringToTerraform(this._dataDisksPersistenceMode),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      od_sizes: cdktf.listMapper(cdktf.stringToTerraform)(this._odSizes),
      os: cdktf.stringToTerraform(this._os),
      os_disk_persistence_mode: cdktf.stringToTerraform(this._osDiskPersistenceMode),
      preferred_spot_sizes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredSpotSizes),
      preferred_zones: cdktf.stringToTerraform(this._preferredZones),
      region: cdktf.stringToTerraform(this._region),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      should_persist_data_disks: cdktf.booleanToTerraform(this._shouldPersistDataDisks),
      should_persist_network: cdktf.booleanToTerraform(this._shouldPersistNetwork),
      should_persist_os_disk: cdktf.booleanToTerraform(this._shouldPersistOsDisk),
      should_persist_vm: cdktf.booleanToTerraform(this._shouldPersistVm),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      spot_sizes: cdktf.listMapper(cdktf.stringToTerraform)(this._spotSizes),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      attach_data_disk: cdktf.listMapper(statefulNodeAzureAttachDataDiskToTerraform)(this._attachDataDisk),
      boot_diagnostics: cdktf.listMapper(statefulNodeAzureBootDiagnosticsToTerraform)(this._bootDiagnostics),
      data_disk: cdktf.listMapper(statefulNodeAzureDataDiskToTerraform)(this._dataDisk),
      delete: cdktf.listMapper(statefulNodeAzureDeleteToTerraform)(this._delete),
      detach_data_disk: cdktf.listMapper(statefulNodeAzureDetachDataDiskToTerraform)(this._detachDataDisk),
      extension: cdktf.listMapper(statefulNodeAzureExtensionToTerraform)(this._extension),
      health: statefulNodeAzureHealthToTerraform(this._health.internalValue),
      image: statefulNodeAzureImageToTerraform(this._image.internalValue),
      import_vm: cdktf.listMapper(statefulNodeAzureImportVmToTerraform)(this._importVm),
      load_balancer: cdktf.listMapper(statefulNodeAzureLoadBalancerToTerraform)(this._loadBalancer),
      login: statefulNodeAzureLoginToTerraform(this._login.internalValue),
      managed_service_identities: cdktf.listMapper(statefulNodeAzureManagedServiceIdentitiesToTerraform)(this._managedServiceIdentities),
      network: statefulNodeAzureNetworkToTerraform(this._network.internalValue),
      os_disk: statefulNodeAzureOsDiskToTerraform(this._osDisk.internalValue),
      scheduling_task: cdktf.listMapper(statefulNodeAzureSchedulingTaskToTerraform)(this._schedulingTask),
      secret: cdktf.listMapper(statefulNodeAzureSecretToTerraform)(this._secret),
      signal: cdktf.listMapper(statefulNodeAzureSignalToTerraform)(this._signal),
      strategy: statefulNodeAzureStrategyToTerraform(this._strategy.internalValue),
      tag: cdktf.listMapper(statefulNodeAzureTagToTerraform)(this._tag),
      update_state: cdktf.listMapper(statefulNodeAzureUpdateStateToTerraform)(this._updateState),
    };
  }
}
