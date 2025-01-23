# `mrscalerAws` Submodule <a name="`mrscalerAws` Submodule" id="@cdktf/provider-spotinst.mrscalerAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrscalerAws <a name="MrscalerAws" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws spotinst_mrscaler_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAws(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  strategy: str,
  additional_info: str = None,
  additional_primary_security_groups: typing.List[str] = None,
  additional_replica_security_groups: typing.List[str] = None,
  applications: typing.Union[IResolvable, typing.List[MrscalerAwsApplications]] = None,
  availability_zones: typing.List[str] = None,
  bootstrap_actions_file: typing.Union[IResolvable, typing.List[MrscalerAwsBootstrapActionsFile]] = None,
  cluster_id: str = None,
  configurations_file: typing.Union[IResolvable, typing.List[MrscalerAwsConfigurationsFile]] = None,
  core_desired_capacity: typing.Union[int, float] = None,
  core_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsCoreEbsBlockDevice]] = None,
  core_ebs_optimized: typing.Union[bool, IResolvable] = None,
  core_instance_types: typing.List[str] = None,
  core_lifecycle: str = None,
  core_max_size: typing.Union[int, float] = None,
  core_min_size: typing.Union[int, float] = None,
  core_scaling_down_policy: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingDownPolicy]] = None,
  core_scaling_up_policy: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingUpPolicy]] = None,
  core_unit: str = None,
  custom_ami_id: str = None,
  description: str = None,
  ebs_root_volume_size: typing.Union[int, float] = None,
  ec2_key_name: str = None,
  expose_cluster_id: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_weights: typing.Union[IResolvable, typing.List[MrscalerAwsInstanceWeights]] = None,
  job_flow_role: str = None,
  keep_job_flow_alive: typing.Union[bool, IResolvable] = None,
  log_uri: str = None,
  managed_primary_security_group: str = None,
  managed_replica_security_group: str = None,
  master_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsMasterEbsBlockDevice]] = None,
  master_ebs_optimized: typing.Union[bool, IResolvable] = None,
  master_instance_types: typing.List[str] = None,
  master_lifecycle: str = None,
  master_target: typing.Union[int, float] = None,
  provisioning_timeout: MrscalerAwsProvisioningTimeout = None,
  region: str = None,
  release_label: str = None,
  repo_upgrade_on_boot: str = None,
  retries: typing.Union[int, float] = None,
  scheduled_task: typing.Union[IResolvable, typing.List[MrscalerAwsScheduledTask]] = None,
  security_config: str = None,
  service_access_security_group: str = None,
  service_role: str = None,
  steps_file: typing.Union[IResolvable, typing.List[MrscalerAwsStepsFile]] = None,
  tags: typing.Union[IResolvable, typing.List[MrscalerAwsTags]] = None,
  task_desired_capacity: typing.Union[int, float] = None,
  task_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsTaskEbsBlockDevice]] = None,
  task_ebs_optimized: typing.Union[bool, IResolvable] = None,
  task_instance_types: typing.List[str] = None,
  task_lifecycle: str = None,
  task_max_size: typing.Union[int, float] = None,
  task_min_size: typing.Union[int, float] = None,
  task_scaling_down_policy: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingDownPolicy]] = None,
  task_scaling_up_policy: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingUpPolicy]] = None,
  task_unit: str = None,
  termination_policies: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPolicies]] = None,
  termination_protected: typing.Union[bool, IResolvable] = None,
  visible_to_all_users: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#name MrscalerAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.strategy">strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalInfo">additional_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalPrimarySecurityGroups">additional_primary_security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalReplicaSecurityGroups">additional_replica_security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.applications">applications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]</code> | applications block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.bootstrapActionsFile">bootstrap_actions_file</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]</code> | bootstrap_actions_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.configurationsFile">configurations_file</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]</code> | configurations_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreDesiredCapacity">core_desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreEbsBlockDevice">core_ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]</code> | core_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreEbsOptimized">core_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreInstanceTypes">core_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreLifecycle">core_lifecycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreMaxSize">core_max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreMinSize">core_min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreScalingDownPolicy">core_scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]</code> | core_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreScalingUpPolicy">core_scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]</code> | core_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreUnit">core_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.customAmiId">custom_ami_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#description MrscalerAws#description}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.ebsRootVolumeSize">ebs_root_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.ec2KeyName">ec2_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.exposeClusterId">expose_cluster_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#id MrscalerAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.instanceWeights">instance_weights</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]</code> | instance_weights block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.jobFlowRole">job_flow_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.keepJobFlowAlive">keep_job_flow_alive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.logUri">log_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.managedPrimarySecurityGroup">managed_primary_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.managedReplicaSecurityGroup">managed_replica_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterEbsBlockDevice">master_ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]</code> | master_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterEbsOptimized">master_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterInstanceTypes">master_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterLifecycle">master_lifecycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterTarget">master_target</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provisioningTimeout">provisioning_timeout</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | provisioning_timeout block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#region MrscalerAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.releaseLabel">release_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.repoUpgradeOnBoot">repo_upgrade_on_boot</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#retries MrscalerAws#retries}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.securityConfig">security_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.serviceAccessSecurityGroup">service_access_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.stepsFile">steps_file</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]</code> | steps_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskDesiredCapacity">task_desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskEbsBlockDevice">task_ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]</code> | task_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskEbsOptimized">task_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskInstanceTypes">task_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskLifecycle">task_lifecycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskMaxSize">task_max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskMinSize">task_min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskScalingDownPolicy">task_scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]</code> | task_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskScalingUpPolicy">task_scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]</code> | task_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskUnit">task_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.terminationPolicies">termination_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]</code> | termination_policies block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.terminationProtected">termination_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.visibleToAllUsers">visible_to_all_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#name MrscalerAws#name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.strategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}.

---

##### `additional_info`<sup>Optional</sup> <a name="additional_info" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalInfo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}.

---

##### `additional_primary_security_groups`<sup>Optional</sup> <a name="additional_primary_security_groups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalPrimarySecurityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}.

---

##### `additional_replica_security_groups`<sup>Optional</sup> <a name="additional_replica_security_groups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.additionalReplicaSecurityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.applications"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]

applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#applications MrscalerAws#applications}

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}.

---

##### `bootstrap_actions_file`<sup>Optional</sup> <a name="bootstrap_actions_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.bootstrapActionsFile"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]

bootstrap_actions_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#bootstrap_actions_file MrscalerAws#bootstrap_actions_file}

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}.

---

##### `configurations_file`<sup>Optional</sup> <a name="configurations_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.configurationsFile"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]

configurations_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#configurations_file MrscalerAws#configurations_file}

---

##### `core_desired_capacity`<sup>Optional</sup> <a name="core_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreDesiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}.

---

##### `core_ebs_block_device`<sup>Optional</sup> <a name="core_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreEbsBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]

core_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_ebs_block_device MrscalerAws#core_ebs_block_device}

---

##### `core_ebs_optimized`<sup>Optional</sup> <a name="core_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreEbsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}.

---

##### `core_instance_types`<sup>Optional</sup> <a name="core_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}.

---

##### `core_lifecycle`<sup>Optional</sup> <a name="core_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreLifecycle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}.

---

##### `core_max_size`<sup>Optional</sup> <a name="core_max_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreMaxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}.

---

##### `core_min_size`<sup>Optional</sup> <a name="core_min_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreMinSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}.

---

##### `core_scaling_down_policy`<sup>Optional</sup> <a name="core_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreScalingDownPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]

core_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_scaling_down_policy MrscalerAws#core_scaling_down_policy}

---

##### `core_scaling_up_policy`<sup>Optional</sup> <a name="core_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreScalingUpPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]

core_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_scaling_up_policy MrscalerAws#core_scaling_up_policy}

---

##### `core_unit`<sup>Optional</sup> <a name="core_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.coreUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}.

---

##### `custom_ami_id`<sup>Optional</sup> <a name="custom_ami_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.customAmiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#description MrscalerAws#description}.

---

##### `ebs_root_volume_size`<sup>Optional</sup> <a name="ebs_root_volume_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.ebsRootVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}.

---

##### `ec2_key_name`<sup>Optional</sup> <a name="ec2_key_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.ec2KeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}.

---

##### `expose_cluster_id`<sup>Optional</sup> <a name="expose_cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.exposeClusterId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#id MrscalerAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_weights`<sup>Optional</sup> <a name="instance_weights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.instanceWeights"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]

instance_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#instance_weights MrscalerAws#instance_weights}

---

##### `job_flow_role`<sup>Optional</sup> <a name="job_flow_role" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.jobFlowRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}.

---

##### `keep_job_flow_alive`<sup>Optional</sup> <a name="keep_job_flow_alive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.keepJobFlowAlive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}.

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.logUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}.

---

##### `managed_primary_security_group`<sup>Optional</sup> <a name="managed_primary_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.managedPrimarySecurityGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}.

---

##### `managed_replica_security_group`<sup>Optional</sup> <a name="managed_replica_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.managedReplicaSecurityGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}.

---

##### `master_ebs_block_device`<sup>Optional</sup> <a name="master_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterEbsBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]

master_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_ebs_block_device MrscalerAws#master_ebs_block_device}

---

##### `master_ebs_optimized`<sup>Optional</sup> <a name="master_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterEbsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}.

---

##### `master_instance_types`<sup>Optional</sup> <a name="master_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}.

---

##### `master_lifecycle`<sup>Optional</sup> <a name="master_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterLifecycle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}.

---

##### `master_target`<sup>Optional</sup> <a name="master_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.masterTarget"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}.

---

##### `provisioning_timeout`<sup>Optional</sup> <a name="provisioning_timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.provisioningTimeout"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

provisioning_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#provisioning_timeout MrscalerAws#provisioning_timeout}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#region MrscalerAws#region}.

---

##### `release_label`<sup>Optional</sup> <a name="release_label" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.releaseLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}.

---

##### `repo_upgrade_on_boot`<sup>Optional</sup> <a name="repo_upgrade_on_boot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.repoUpgradeOnBoot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#retries MrscalerAws#retries}.

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.scheduledTask"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#scheduled_task MrscalerAws#scheduled_task}

---

##### `security_config`<sup>Optional</sup> <a name="security_config" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.securityConfig"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}.

---

##### `service_access_security_group`<sup>Optional</sup> <a name="service_access_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.serviceAccessSecurityGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}.

---

##### `service_role`<sup>Optional</sup> <a name="service_role" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.serviceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}.

---

##### `steps_file`<sup>Optional</sup> <a name="steps_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.stepsFile"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]

steps_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#steps_file MrscalerAws#steps_file}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#tags MrscalerAws#tags}

---

##### `task_desired_capacity`<sup>Optional</sup> <a name="task_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskDesiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}.

---

##### `task_ebs_block_device`<sup>Optional</sup> <a name="task_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskEbsBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]

task_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_ebs_block_device MrscalerAws#task_ebs_block_device}

---

##### `task_ebs_optimized`<sup>Optional</sup> <a name="task_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskEbsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}.

---

##### `task_instance_types`<sup>Optional</sup> <a name="task_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}.

---

##### `task_lifecycle`<sup>Optional</sup> <a name="task_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskLifecycle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}.

---

##### `task_max_size`<sup>Optional</sup> <a name="task_max_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskMaxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}.

---

##### `task_min_size`<sup>Optional</sup> <a name="task_min_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskMinSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}.

---

##### `task_scaling_down_policy`<sup>Optional</sup> <a name="task_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskScalingDownPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]

task_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_scaling_down_policy MrscalerAws#task_scaling_down_policy}

---

##### `task_scaling_up_policy`<sup>Optional</sup> <a name="task_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskScalingUpPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]

task_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_scaling_up_policy MrscalerAws#task_scaling_up_policy}

---

##### `task_unit`<sup>Optional</sup> <a name="task_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.taskUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}.

---

##### `termination_policies`<sup>Optional</sup> <a name="termination_policies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.terminationPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]

termination_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#termination_policies MrscalerAws#termination_policies}

---

##### `termination_protected`<sup>Optional</sup> <a name="termination_protected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.terminationProtected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}.

---

##### `visible_to_all_users`<sup>Optional</sup> <a name="visible_to_all_users" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.Initializer.parameter.visibleToAllUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putApplications">put_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putBootstrapActionsFile">put_bootstrap_actions_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putConfigurationsFile">put_configurations_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreEbsBlockDevice">put_core_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingDownPolicy">put_core_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingUpPolicy">put_core_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putInstanceWeights">put_instance_weights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putMasterEbsBlockDevice">put_master_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout">put_provisioning_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putScheduledTask">put_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putStepsFile">put_steps_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskEbsBlockDevice">put_task_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingDownPolicy">put_task_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingUpPolicy">put_task_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTerminationPolicies">put_termination_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalInfo">reset_additional_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalPrimarySecurityGroups">reset_additional_primary_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalReplicaSecurityGroups">reset_additional_replica_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetApplications">reset_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetBootstrapActionsFile">reset_bootstrap_actions_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetConfigurationsFile">reset_configurations_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreDesiredCapacity">reset_core_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsBlockDevice">reset_core_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsOptimized">reset_core_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreInstanceTypes">reset_core_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreLifecycle">reset_core_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMaxSize">reset_core_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMinSize">reset_core_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingDownPolicy">reset_core_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingUpPolicy">reset_core_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreUnit">reset_core_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCustomAmiId">reset_custom_ami_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEbsRootVolumeSize">reset_ebs_root_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEc2KeyName">reset_ec2_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetExposeClusterId">reset_expose_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetInstanceWeights">reset_instance_weights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetJobFlowRole">reset_job_flow_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetKeepJobFlowAlive">reset_keep_job_flow_alive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetLogUri">reset_log_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedPrimarySecurityGroup">reset_managed_primary_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedReplicaSecurityGroup">reset_managed_replica_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsBlockDevice">reset_master_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsOptimized">reset_master_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterInstanceTypes">reset_master_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterLifecycle">reset_master_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterTarget">reset_master_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetProvisioningTimeout">reset_provisioning_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetReleaseLabel">reset_release_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRepoUpgradeOnBoot">reset_repo_upgrade_on_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetScheduledTask">reset_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetSecurityConfig">reset_security_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceAccessSecurityGroup">reset_service_access_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceRole">reset_service_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetStepsFile">reset_steps_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskDesiredCapacity">reset_task_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsBlockDevice">reset_task_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsOptimized">reset_task_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskInstanceTypes">reset_task_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskLifecycle">reset_task_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMaxSize">reset_task_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMinSize">reset_task_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingDownPolicy">reset_task_scaling_down_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingUpPolicy">reset_task_scaling_up_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskUnit">reset_task_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationPolicies">reset_termination_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationProtected">reset_termination_protected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetVisibleToAllUsers">reset_visible_to_all_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_applications` <a name="put_applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putApplications"></a>

```python
def put_applications(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsApplications]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putApplications.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]

---

##### `put_bootstrap_actions_file` <a name="put_bootstrap_actions_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putBootstrapActionsFile"></a>

```python
def put_bootstrap_actions_file(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsBootstrapActionsFile]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putBootstrapActionsFile.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]

---

##### `put_configurations_file` <a name="put_configurations_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putConfigurationsFile"></a>

```python
def put_configurations_file(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsConfigurationsFile]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putConfigurationsFile.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]

---

##### `put_core_ebs_block_device` <a name="put_core_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreEbsBlockDevice"></a>

```python
def put_core_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsCoreEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]

---

##### `put_core_scaling_down_policy` <a name="put_core_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingDownPolicy"></a>

```python
def put_core_scaling_down_policy(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingDownPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingDownPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]

---

##### `put_core_scaling_up_policy` <a name="put_core_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingUpPolicy"></a>

```python
def put_core_scaling_up_policy(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingUpPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putCoreScalingUpPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]

---

##### `put_instance_weights` <a name="put_instance_weights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putInstanceWeights"></a>

```python
def put_instance_weights(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsInstanceWeights]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putInstanceWeights.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]

---

##### `put_master_ebs_block_device` <a name="put_master_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putMasterEbsBlockDevice"></a>

```python
def put_master_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsMasterEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putMasterEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]

---

##### `put_provisioning_timeout` <a name="put_provisioning_timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout"></a>

```python
def put_provisioning_timeout(
  timeout: typing.Union[int, float],
  timeout_action: str
) -> None
```

###### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#timeout MrscalerAws#timeout}.

---

###### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putProvisioningTimeout.parameter.timeoutAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#timeout_action MrscalerAws#timeout_action}.

---

##### `put_scheduled_task` <a name="put_scheduled_task" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putScheduledTask"></a>

```python
def put_scheduled_task(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsScheduledTask]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putScheduledTask.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]

---

##### `put_steps_file` <a name="put_steps_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putStepsFile"></a>

```python
def put_steps_file(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsStepsFile]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putStepsFile.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]

---

##### `put_task_ebs_block_device` <a name="put_task_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskEbsBlockDevice"></a>

```python
def put_task_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsTaskEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]

---

##### `put_task_scaling_down_policy` <a name="put_task_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingDownPolicy"></a>

```python
def put_task_scaling_down_policy(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingDownPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingDownPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]

---

##### `put_task_scaling_up_policy` <a name="put_task_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingUpPolicy"></a>

```python
def put_task_scaling_up_policy(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingUpPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTaskScalingUpPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]

---

##### `put_termination_policies` <a name="put_termination_policies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTerminationPolicies"></a>

```python
def put_termination_policies(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.putTerminationPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]

---

##### `reset_additional_info` <a name="reset_additional_info" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalInfo"></a>

```python
def reset_additional_info() -> None
```

##### `reset_additional_primary_security_groups` <a name="reset_additional_primary_security_groups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalPrimarySecurityGroups"></a>

```python
def reset_additional_primary_security_groups() -> None
```

##### `reset_additional_replica_security_groups` <a name="reset_additional_replica_security_groups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAdditionalReplicaSecurityGroups"></a>

```python
def reset_additional_replica_security_groups() -> None
```

##### `reset_applications` <a name="reset_applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetApplications"></a>

```python
def reset_applications() -> None
```

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_bootstrap_actions_file` <a name="reset_bootstrap_actions_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetBootstrapActionsFile"></a>

```python
def reset_bootstrap_actions_file() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_configurations_file` <a name="reset_configurations_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetConfigurationsFile"></a>

```python
def reset_configurations_file() -> None
```

##### `reset_core_desired_capacity` <a name="reset_core_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreDesiredCapacity"></a>

```python
def reset_core_desired_capacity() -> None
```

##### `reset_core_ebs_block_device` <a name="reset_core_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsBlockDevice"></a>

```python
def reset_core_ebs_block_device() -> None
```

##### `reset_core_ebs_optimized` <a name="reset_core_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreEbsOptimized"></a>

```python
def reset_core_ebs_optimized() -> None
```

##### `reset_core_instance_types` <a name="reset_core_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreInstanceTypes"></a>

```python
def reset_core_instance_types() -> None
```

##### `reset_core_lifecycle` <a name="reset_core_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreLifecycle"></a>

```python
def reset_core_lifecycle() -> None
```

##### `reset_core_max_size` <a name="reset_core_max_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMaxSize"></a>

```python
def reset_core_max_size() -> None
```

##### `reset_core_min_size` <a name="reset_core_min_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreMinSize"></a>

```python
def reset_core_min_size() -> None
```

##### `reset_core_scaling_down_policy` <a name="reset_core_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingDownPolicy"></a>

```python
def reset_core_scaling_down_policy() -> None
```

##### `reset_core_scaling_up_policy` <a name="reset_core_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreScalingUpPolicy"></a>

```python
def reset_core_scaling_up_policy() -> None
```

##### `reset_core_unit` <a name="reset_core_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCoreUnit"></a>

```python
def reset_core_unit() -> None
```

##### `reset_custom_ami_id` <a name="reset_custom_ami_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetCustomAmiId"></a>

```python
def reset_custom_ami_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ebs_root_volume_size` <a name="reset_ebs_root_volume_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEbsRootVolumeSize"></a>

```python
def reset_ebs_root_volume_size() -> None
```

##### `reset_ec2_key_name` <a name="reset_ec2_key_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetEc2KeyName"></a>

```python
def reset_ec2_key_name() -> None
```

##### `reset_expose_cluster_id` <a name="reset_expose_cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetExposeClusterId"></a>

```python
def reset_expose_cluster_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_weights` <a name="reset_instance_weights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetInstanceWeights"></a>

```python
def reset_instance_weights() -> None
```

##### `reset_job_flow_role` <a name="reset_job_flow_role" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetJobFlowRole"></a>

```python
def reset_job_flow_role() -> None
```

##### `reset_keep_job_flow_alive` <a name="reset_keep_job_flow_alive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetKeepJobFlowAlive"></a>

```python
def reset_keep_job_flow_alive() -> None
```

##### `reset_log_uri` <a name="reset_log_uri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetLogUri"></a>

```python
def reset_log_uri() -> None
```

##### `reset_managed_primary_security_group` <a name="reset_managed_primary_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedPrimarySecurityGroup"></a>

```python
def reset_managed_primary_security_group() -> None
```

##### `reset_managed_replica_security_group` <a name="reset_managed_replica_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetManagedReplicaSecurityGroup"></a>

```python
def reset_managed_replica_security_group() -> None
```

##### `reset_master_ebs_block_device` <a name="reset_master_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsBlockDevice"></a>

```python
def reset_master_ebs_block_device() -> None
```

##### `reset_master_ebs_optimized` <a name="reset_master_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterEbsOptimized"></a>

```python
def reset_master_ebs_optimized() -> None
```

##### `reset_master_instance_types` <a name="reset_master_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterInstanceTypes"></a>

```python
def reset_master_instance_types() -> None
```

##### `reset_master_lifecycle` <a name="reset_master_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterLifecycle"></a>

```python
def reset_master_lifecycle() -> None
```

##### `reset_master_target` <a name="reset_master_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetMasterTarget"></a>

```python
def reset_master_target() -> None
```

##### `reset_provisioning_timeout` <a name="reset_provisioning_timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetProvisioningTimeout"></a>

```python
def reset_provisioning_timeout() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_release_label` <a name="reset_release_label" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetReleaseLabel"></a>

```python
def reset_release_label() -> None
```

##### `reset_repo_upgrade_on_boot` <a name="reset_repo_upgrade_on_boot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRepoUpgradeOnBoot"></a>

```python
def reset_repo_upgrade_on_boot() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_scheduled_task` <a name="reset_scheduled_task" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetScheduledTask"></a>

```python
def reset_scheduled_task() -> None
```

##### `reset_security_config` <a name="reset_security_config" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetSecurityConfig"></a>

```python
def reset_security_config() -> None
```

##### `reset_service_access_security_group` <a name="reset_service_access_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceAccessSecurityGroup"></a>

```python
def reset_service_access_security_group() -> None
```

##### `reset_service_role` <a name="reset_service_role" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetServiceRole"></a>

```python
def reset_service_role() -> None
```

##### `reset_steps_file` <a name="reset_steps_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetStepsFile"></a>

```python
def reset_steps_file() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_desired_capacity` <a name="reset_task_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskDesiredCapacity"></a>

```python
def reset_task_desired_capacity() -> None
```

##### `reset_task_ebs_block_device` <a name="reset_task_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsBlockDevice"></a>

```python
def reset_task_ebs_block_device() -> None
```

##### `reset_task_ebs_optimized` <a name="reset_task_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskEbsOptimized"></a>

```python
def reset_task_ebs_optimized() -> None
```

##### `reset_task_instance_types` <a name="reset_task_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskInstanceTypes"></a>

```python
def reset_task_instance_types() -> None
```

##### `reset_task_lifecycle` <a name="reset_task_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskLifecycle"></a>

```python
def reset_task_lifecycle() -> None
```

##### `reset_task_max_size` <a name="reset_task_max_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMaxSize"></a>

```python
def reset_task_max_size() -> None
```

##### `reset_task_min_size` <a name="reset_task_min_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskMinSize"></a>

```python
def reset_task_min_size() -> None
```

##### `reset_task_scaling_down_policy` <a name="reset_task_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingDownPolicy"></a>

```python
def reset_task_scaling_down_policy() -> None
```

##### `reset_task_scaling_up_policy` <a name="reset_task_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskScalingUpPolicy"></a>

```python
def reset_task_scaling_up_policy() -> None
```

##### `reset_task_unit` <a name="reset_task_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTaskUnit"></a>

```python
def reset_task_unit() -> None
```

##### `reset_termination_policies` <a name="reset_termination_policies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationPolicies"></a>

```python
def reset_termination_policies() -> None
```

##### `reset_termination_protected` <a name="reset_termination_protected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetTerminationProtected"></a>

```python
def reset_termination_protected() -> None
```

##### `reset_visible_to_all_users` <a name="reset_visible_to_all_users" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.resetVisibleToAllUsers"></a>

```python
def reset_visible_to_all_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MrscalerAws resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAws.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAws.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAws.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAws.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MrscalerAws resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MrscalerAws to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MrscalerAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MrscalerAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applications">applications</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList">MrscalerAwsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFile">bootstrap_actions_file</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList">MrscalerAwsBootstrapActionsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFile">configurations_file</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList">MrscalerAwsConfigurationsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDevice">core_ebs_block_device</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList">MrscalerAwsCoreEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicy">core_scaling_down_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList">MrscalerAwsCoreScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicy">core_scaling_up_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList">MrscalerAwsCoreScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeights">instance_weights</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList">MrscalerAwsInstanceWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDevice">master_ebs_block_device</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList">MrscalerAwsMasterEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.outputClusterId">output_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeout">provisioning_timeout</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference">MrscalerAwsProvisioningTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTask">scheduled_task</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList">MrscalerAwsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFile">steps_file</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList">MrscalerAwsStepsFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList">MrscalerAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDevice">task_ebs_block_device</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList">MrscalerAwsTaskEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicy">task_scaling_down_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList">MrscalerAwsTaskScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicy">task_scaling_up_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList">MrscalerAwsTaskScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPolicies">termination_policies</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList">MrscalerAwsTerminationPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfoInput">additional_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroupsInput">additional_primary_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroupsInput">additional_replica_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applicationsInput">applications_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFileInput">bootstrap_actions_file_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFileInput">configurations_file_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacityInput">core_desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDeviceInput">core_ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimizedInput">core_ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypesInput">core_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycleInput">core_lifecycle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSizeInput">core_max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSizeInput">core_min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicyInput">core_scaling_down_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicyInput">core_scaling_up_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnitInput">core_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiIdInput">custom_ami_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSizeInput">ebs_root_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyNameInput">ec2_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterIdInput">expose_cluster_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeightsInput">instance_weights_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRoleInput">job_flow_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAliveInput">keep_job_flow_alive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUriInput">log_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroupInput">managed_primary_security_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroupInput">managed_replica_security_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDeviceInput">master_ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimizedInput">master_ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypesInput">master_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycleInput">master_lifecycle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTargetInput">master_target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeoutInput">provisioning_timeout_input</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabelInput">release_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBootInput">repo_upgrade_on_boot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTaskInput">scheduled_task_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfigInput">security_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroupInput">service_access_security_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFileInput">steps_file_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacityInput">task_desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDeviceInput">task_ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimizedInput">task_ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypesInput">task_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycleInput">task_lifecycle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSizeInput">task_max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSizeInput">task_min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicyInput">task_scaling_down_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicyInput">task_scaling_up_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnitInput">task_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPoliciesInput">termination_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtectedInput">termination_protected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsersInput">visible_to_all_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfo">additional_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroups">additional_primary_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroups">additional_replica_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacity">core_desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimized">core_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypes">core_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycle">core_lifecycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSize">core_max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSize">core_min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnit">core_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiId">custom_ami_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSize">ebs_root_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyName">ec2_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterId">expose_cluster_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRole">job_flow_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAlive">keep_job_flow_alive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUri">log_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroup">managed_primary_security_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroup">managed_replica_security_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimized">master_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypes">master_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycle">master_lifecycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTarget">master_target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabel">release_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBoot">repo_upgrade_on_boot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfig">security_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroup">service_access_security_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacity">task_desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimized">task_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypes">task_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycle">task_lifecycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSize">task_max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSize">task_min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnit">task_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtected">termination_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsers">visible_to_all_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applications"></a>

```python
applications: MrscalerAwsApplicationsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList">MrscalerAwsApplicationsList</a>

---

##### `bootstrap_actions_file`<sup>Required</sup> <a name="bootstrap_actions_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFile"></a>

```python
bootstrap_actions_file: MrscalerAwsBootstrapActionsFileList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList">MrscalerAwsBootstrapActionsFileList</a>

---

##### `configurations_file`<sup>Required</sup> <a name="configurations_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFile"></a>

```python
configurations_file: MrscalerAwsConfigurationsFileList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList">MrscalerAwsConfigurationsFileList</a>

---

##### `core_ebs_block_device`<sup>Required</sup> <a name="core_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDevice"></a>

```python
core_ebs_block_device: MrscalerAwsCoreEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList">MrscalerAwsCoreEbsBlockDeviceList</a>

---

##### `core_scaling_down_policy`<sup>Required</sup> <a name="core_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicy"></a>

```python
core_scaling_down_policy: MrscalerAwsCoreScalingDownPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList">MrscalerAwsCoreScalingDownPolicyList</a>

---

##### `core_scaling_up_policy`<sup>Required</sup> <a name="core_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicy"></a>

```python
core_scaling_up_policy: MrscalerAwsCoreScalingUpPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList">MrscalerAwsCoreScalingUpPolicyList</a>

---

##### `instance_weights`<sup>Required</sup> <a name="instance_weights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeights"></a>

```python
instance_weights: MrscalerAwsInstanceWeightsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList">MrscalerAwsInstanceWeightsList</a>

---

##### `master_ebs_block_device`<sup>Required</sup> <a name="master_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDevice"></a>

```python
master_ebs_block_device: MrscalerAwsMasterEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList">MrscalerAwsMasterEbsBlockDeviceList</a>

---

##### `output_cluster_id`<sup>Required</sup> <a name="output_cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.outputClusterId"></a>

```python
output_cluster_id: str
```

- *Type:* str

---

##### `provisioning_timeout`<sup>Required</sup> <a name="provisioning_timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeout"></a>

```python
provisioning_timeout: MrscalerAwsProvisioningTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference">MrscalerAwsProvisioningTimeoutOutputReference</a>

---

##### `scheduled_task`<sup>Required</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTask"></a>

```python
scheduled_task: MrscalerAwsScheduledTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList">MrscalerAwsScheduledTaskList</a>

---

##### `steps_file`<sup>Required</sup> <a name="steps_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFile"></a>

```python
steps_file: MrscalerAwsStepsFileList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList">MrscalerAwsStepsFileList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tags"></a>

```python
tags: MrscalerAwsTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList">MrscalerAwsTagsList</a>

---

##### `task_ebs_block_device`<sup>Required</sup> <a name="task_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDevice"></a>

```python
task_ebs_block_device: MrscalerAwsTaskEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList">MrscalerAwsTaskEbsBlockDeviceList</a>

---

##### `task_scaling_down_policy`<sup>Required</sup> <a name="task_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicy"></a>

```python
task_scaling_down_policy: MrscalerAwsTaskScalingDownPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList">MrscalerAwsTaskScalingDownPolicyList</a>

---

##### `task_scaling_up_policy`<sup>Required</sup> <a name="task_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicy"></a>

```python
task_scaling_up_policy: MrscalerAwsTaskScalingUpPolicyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList">MrscalerAwsTaskScalingUpPolicyList</a>

---

##### `termination_policies`<sup>Required</sup> <a name="termination_policies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPolicies"></a>

```python
termination_policies: MrscalerAwsTerminationPoliciesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList">MrscalerAwsTerminationPoliciesList</a>

---

##### `additional_info_input`<sup>Optional</sup> <a name="additional_info_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfoInput"></a>

```python
additional_info_input: str
```

- *Type:* str

---

##### `additional_primary_security_groups_input`<sup>Optional</sup> <a name="additional_primary_security_groups_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroupsInput"></a>

```python
additional_primary_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_replica_security_groups_input`<sup>Optional</sup> <a name="additional_replica_security_groups_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroupsInput"></a>

```python
additional_replica_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `applications_input`<sup>Optional</sup> <a name="applications_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.applicationsInput"></a>

```python
applications_input: typing.Union[IResolvable, typing.List[MrscalerAwsApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bootstrap_actions_file_input`<sup>Optional</sup> <a name="bootstrap_actions_file_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.bootstrapActionsFileInput"></a>

```python
bootstrap_actions_file_input: typing.Union[IResolvable, typing.List[MrscalerAwsBootstrapActionsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `configurations_file_input`<sup>Optional</sup> <a name="configurations_file_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.configurationsFileInput"></a>

```python
configurations_file_input: typing.Union[IResolvable, typing.List[MrscalerAwsConfigurationsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]

---

##### `core_desired_capacity_input`<sup>Optional</sup> <a name="core_desired_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacityInput"></a>

```python
core_desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_ebs_block_device_input`<sup>Optional</sup> <a name="core_ebs_block_device_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsBlockDeviceInput"></a>

```python
core_ebs_block_device_input: typing.Union[IResolvable, typing.List[MrscalerAwsCoreEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]

---

##### `core_ebs_optimized_input`<sup>Optional</sup> <a name="core_ebs_optimized_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimizedInput"></a>

```python
core_ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `core_instance_types_input`<sup>Optional</sup> <a name="core_instance_types_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypesInput"></a>

```python
core_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `core_lifecycle_input`<sup>Optional</sup> <a name="core_lifecycle_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycleInput"></a>

```python
core_lifecycle_input: str
```

- *Type:* str

---

##### `core_max_size_input`<sup>Optional</sup> <a name="core_max_size_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSizeInput"></a>

```python
core_max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_min_size_input`<sup>Optional</sup> <a name="core_min_size_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSizeInput"></a>

```python
core_min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_scaling_down_policy_input`<sup>Optional</sup> <a name="core_scaling_down_policy_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingDownPolicyInput"></a>

```python
core_scaling_down_policy_input: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]

---

##### `core_scaling_up_policy_input`<sup>Optional</sup> <a name="core_scaling_up_policy_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreScalingUpPolicyInput"></a>

```python
core_scaling_up_policy_input: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]

---

##### `core_unit_input`<sup>Optional</sup> <a name="core_unit_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnitInput"></a>

```python
core_unit_input: str
```

- *Type:* str

---

##### `custom_ami_id_input`<sup>Optional</sup> <a name="custom_ami_id_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiIdInput"></a>

```python
custom_ami_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ebs_root_volume_size_input`<sup>Optional</sup> <a name="ebs_root_volume_size_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSizeInput"></a>

```python
ebs_root_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ec2_key_name_input`<sup>Optional</sup> <a name="ec2_key_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyNameInput"></a>

```python
ec2_key_name_input: str
```

- *Type:* str

---

##### `expose_cluster_id_input`<sup>Optional</sup> <a name="expose_cluster_id_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterIdInput"></a>

```python
expose_cluster_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_weights_input`<sup>Optional</sup> <a name="instance_weights_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.instanceWeightsInput"></a>

```python
instance_weights_input: typing.Union[IResolvable, typing.List[MrscalerAwsInstanceWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]

---

##### `job_flow_role_input`<sup>Optional</sup> <a name="job_flow_role_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRoleInput"></a>

```python
job_flow_role_input: str
```

- *Type:* str

---

##### `keep_job_flow_alive_input`<sup>Optional</sup> <a name="keep_job_flow_alive_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAliveInput"></a>

```python
keep_job_flow_alive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_uri_input`<sup>Optional</sup> <a name="log_uri_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUriInput"></a>

```python
log_uri_input: str
```

- *Type:* str

---

##### `managed_primary_security_group_input`<sup>Optional</sup> <a name="managed_primary_security_group_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroupInput"></a>

```python
managed_primary_security_group_input: str
```

- *Type:* str

---

##### `managed_replica_security_group_input`<sup>Optional</sup> <a name="managed_replica_security_group_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroupInput"></a>

```python
managed_replica_security_group_input: str
```

- *Type:* str

---

##### `master_ebs_block_device_input`<sup>Optional</sup> <a name="master_ebs_block_device_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsBlockDeviceInput"></a>

```python
master_ebs_block_device_input: typing.Union[IResolvable, typing.List[MrscalerAwsMasterEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]

---

##### `master_ebs_optimized_input`<sup>Optional</sup> <a name="master_ebs_optimized_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimizedInput"></a>

```python
master_ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `master_instance_types_input`<sup>Optional</sup> <a name="master_instance_types_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypesInput"></a>

```python
master_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `master_lifecycle_input`<sup>Optional</sup> <a name="master_lifecycle_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycleInput"></a>

```python
master_lifecycle_input: str
```

- *Type:* str

---

##### `master_target_input`<sup>Optional</sup> <a name="master_target_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTargetInput"></a>

```python
master_target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provisioning_timeout_input`<sup>Optional</sup> <a name="provisioning_timeout_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.provisioningTimeoutInput"></a>

```python
provisioning_timeout_input: MrscalerAwsProvisioningTimeout
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `release_label_input`<sup>Optional</sup> <a name="release_label_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabelInput"></a>

```python
release_label_input: str
```

- *Type:* str

---

##### `repo_upgrade_on_boot_input`<sup>Optional</sup> <a name="repo_upgrade_on_boot_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBootInput"></a>

```python
repo_upgrade_on_boot_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduled_task_input`<sup>Optional</sup> <a name="scheduled_task_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.scheduledTaskInput"></a>

```python
scheduled_task_input: typing.Union[IResolvable, typing.List[MrscalerAwsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]

---

##### `security_config_input`<sup>Optional</sup> <a name="security_config_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfigInput"></a>

```python
security_config_input: str
```

- *Type:* str

---

##### `service_access_security_group_input`<sup>Optional</sup> <a name="service_access_security_group_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroupInput"></a>

```python
service_access_security_group_input: str
```

- *Type:* str

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `steps_file_input`<sup>Optional</sup> <a name="steps_file_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.stepsFileInput"></a>

```python
steps_file_input: typing.Union[IResolvable, typing.List[MrscalerAwsStepsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[MrscalerAwsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]

---

##### `task_desired_capacity_input`<sup>Optional</sup> <a name="task_desired_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacityInput"></a>

```python
task_desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_ebs_block_device_input`<sup>Optional</sup> <a name="task_ebs_block_device_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsBlockDeviceInput"></a>

```python
task_ebs_block_device_input: typing.Union[IResolvable, typing.List[MrscalerAwsTaskEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]

---

##### `task_ebs_optimized_input`<sup>Optional</sup> <a name="task_ebs_optimized_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimizedInput"></a>

```python
task_ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `task_instance_types_input`<sup>Optional</sup> <a name="task_instance_types_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypesInput"></a>

```python
task_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_lifecycle_input`<sup>Optional</sup> <a name="task_lifecycle_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycleInput"></a>

```python
task_lifecycle_input: str
```

- *Type:* str

---

##### `task_max_size_input`<sup>Optional</sup> <a name="task_max_size_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSizeInput"></a>

```python
task_max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_min_size_input`<sup>Optional</sup> <a name="task_min_size_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSizeInput"></a>

```python
task_min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_scaling_down_policy_input`<sup>Optional</sup> <a name="task_scaling_down_policy_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingDownPolicyInput"></a>

```python
task_scaling_down_policy_input: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]

---

##### `task_scaling_up_policy_input`<sup>Optional</sup> <a name="task_scaling_up_policy_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskScalingUpPolicyInput"></a>

```python
task_scaling_up_policy_input: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]

---

##### `task_unit_input`<sup>Optional</sup> <a name="task_unit_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnitInput"></a>

```python
task_unit_input: str
```

- *Type:* str

---

##### `termination_policies_input`<sup>Optional</sup> <a name="termination_policies_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationPoliciesInput"></a>

```python
termination_policies_input: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]

---

##### `termination_protected_input`<sup>Optional</sup> <a name="termination_protected_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtectedInput"></a>

```python
termination_protected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visible_to_all_users_input`<sup>Optional</sup> <a name="visible_to_all_users_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsersInput"></a>

```python
visible_to_all_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_info`<sup>Required</sup> <a name="additional_info" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalInfo"></a>

```python
additional_info: str
```

- *Type:* str

---

##### `additional_primary_security_groups`<sup>Required</sup> <a name="additional_primary_security_groups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalPrimarySecurityGroups"></a>

```python
additional_primary_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_replica_security_groups`<sup>Required</sup> <a name="additional_replica_security_groups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.additionalReplicaSecurityGroups"></a>

```python
additional_replica_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `core_desired_capacity`<sup>Required</sup> <a name="core_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreDesiredCapacity"></a>

```python
core_desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_ebs_optimized`<sup>Required</sup> <a name="core_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreEbsOptimized"></a>

```python
core_ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `core_instance_types`<sup>Required</sup> <a name="core_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreInstanceTypes"></a>

```python
core_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `core_lifecycle`<sup>Required</sup> <a name="core_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreLifecycle"></a>

```python
core_lifecycle: str
```

- *Type:* str

---

##### `core_max_size`<sup>Required</sup> <a name="core_max_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMaxSize"></a>

```python
core_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_min_size`<sup>Required</sup> <a name="core_min_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreMinSize"></a>

```python
core_min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_unit`<sup>Required</sup> <a name="core_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.coreUnit"></a>

```python
core_unit: str
```

- *Type:* str

---

##### `custom_ami_id`<sup>Required</sup> <a name="custom_ami_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.customAmiId"></a>

```python
custom_ami_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ebs_root_volume_size`<sup>Required</sup> <a name="ebs_root_volume_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ebsRootVolumeSize"></a>

```python
ebs_root_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ec2_key_name`<sup>Required</sup> <a name="ec2_key_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.ec2KeyName"></a>

```python
ec2_key_name: str
```

- *Type:* str

---

##### `expose_cluster_id`<sup>Required</sup> <a name="expose_cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.exposeClusterId"></a>

```python
expose_cluster_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_flow_role`<sup>Required</sup> <a name="job_flow_role" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.jobFlowRole"></a>

```python
job_flow_role: str
```

- *Type:* str

---

##### `keep_job_flow_alive`<sup>Required</sup> <a name="keep_job_flow_alive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.keepJobFlowAlive"></a>

```python
keep_job_flow_alive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_uri`<sup>Required</sup> <a name="log_uri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

---

##### `managed_primary_security_group`<sup>Required</sup> <a name="managed_primary_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedPrimarySecurityGroup"></a>

```python
managed_primary_security_group: str
```

- *Type:* str

---

##### `managed_replica_security_group`<sup>Required</sup> <a name="managed_replica_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.managedReplicaSecurityGroup"></a>

```python
managed_replica_security_group: str
```

- *Type:* str

---

##### `master_ebs_optimized`<sup>Required</sup> <a name="master_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterEbsOptimized"></a>

```python
master_ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `master_instance_types`<sup>Required</sup> <a name="master_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterInstanceTypes"></a>

```python
master_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `master_lifecycle`<sup>Required</sup> <a name="master_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterLifecycle"></a>

```python
master_lifecycle: str
```

- *Type:* str

---

##### `master_target`<sup>Required</sup> <a name="master_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.masterTarget"></a>

```python
master_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

---

##### `repo_upgrade_on_boot`<sup>Required</sup> <a name="repo_upgrade_on_boot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.repoUpgradeOnBoot"></a>

```python
repo_upgrade_on_boot: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_config`<sup>Required</sup> <a name="security_config" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.securityConfig"></a>

```python
security_config: str
```

- *Type:* str

---

##### `service_access_security_group`<sup>Required</sup> <a name="service_access_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceAccessSecurityGroup"></a>

```python
service_access_security_group: str
```

- *Type:* str

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `task_desired_capacity`<sup>Required</sup> <a name="task_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskDesiredCapacity"></a>

```python
task_desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_ebs_optimized`<sup>Required</sup> <a name="task_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskEbsOptimized"></a>

```python
task_ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `task_instance_types`<sup>Required</sup> <a name="task_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskInstanceTypes"></a>

```python
task_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `task_lifecycle`<sup>Required</sup> <a name="task_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskLifecycle"></a>

```python
task_lifecycle: str
```

- *Type:* str

---

##### `task_max_size`<sup>Required</sup> <a name="task_max_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMaxSize"></a>

```python
task_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_min_size`<sup>Required</sup> <a name="task_min_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskMinSize"></a>

```python
task_min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_unit`<sup>Required</sup> <a name="task_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.taskUnit"></a>

```python
task_unit: str
```

- *Type:* str

---

##### `termination_protected`<sup>Required</sup> <a name="termination_protected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.terminationProtected"></a>

```python
termination_protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visible_to_all_users`<sup>Required</sup> <a name="visible_to_all_users" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.visibleToAllUsers"></a>

```python
visible_to_all_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAws.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MrscalerAwsApplications <a name="MrscalerAwsApplications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsApplications(
  name: str,
  args: typing.List[str] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#name MrscalerAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.args">args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#args MrscalerAws#args}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#version MrscalerAws#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#name MrscalerAws#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#args MrscalerAws#args}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#version MrscalerAws#version}.

---

### MrscalerAwsBootstrapActionsFile <a name="MrscalerAwsBootstrapActionsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsBootstrapActionsFile(
  bucket: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsConfig <a name="MrscalerAwsConfig" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  strategy: str,
  additional_info: str = None,
  additional_primary_security_groups: typing.List[str] = None,
  additional_replica_security_groups: typing.List[str] = None,
  applications: typing.Union[IResolvable, typing.List[MrscalerAwsApplications]] = None,
  availability_zones: typing.List[str] = None,
  bootstrap_actions_file: typing.Union[IResolvable, typing.List[MrscalerAwsBootstrapActionsFile]] = None,
  cluster_id: str = None,
  configurations_file: typing.Union[IResolvable, typing.List[MrscalerAwsConfigurationsFile]] = None,
  core_desired_capacity: typing.Union[int, float] = None,
  core_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsCoreEbsBlockDevice]] = None,
  core_ebs_optimized: typing.Union[bool, IResolvable] = None,
  core_instance_types: typing.List[str] = None,
  core_lifecycle: str = None,
  core_max_size: typing.Union[int, float] = None,
  core_min_size: typing.Union[int, float] = None,
  core_scaling_down_policy: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingDownPolicy]] = None,
  core_scaling_up_policy: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingUpPolicy]] = None,
  core_unit: str = None,
  custom_ami_id: str = None,
  description: str = None,
  ebs_root_volume_size: typing.Union[int, float] = None,
  ec2_key_name: str = None,
  expose_cluster_id: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_weights: typing.Union[IResolvable, typing.List[MrscalerAwsInstanceWeights]] = None,
  job_flow_role: str = None,
  keep_job_flow_alive: typing.Union[bool, IResolvable] = None,
  log_uri: str = None,
  managed_primary_security_group: str = None,
  managed_replica_security_group: str = None,
  master_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsMasterEbsBlockDevice]] = None,
  master_ebs_optimized: typing.Union[bool, IResolvable] = None,
  master_instance_types: typing.List[str] = None,
  master_lifecycle: str = None,
  master_target: typing.Union[int, float] = None,
  provisioning_timeout: MrscalerAwsProvisioningTimeout = None,
  region: str = None,
  release_label: str = None,
  repo_upgrade_on_boot: str = None,
  retries: typing.Union[int, float] = None,
  scheduled_task: typing.Union[IResolvable, typing.List[MrscalerAwsScheduledTask]] = None,
  security_config: str = None,
  service_access_security_group: str = None,
  service_role: str = None,
  steps_file: typing.Union[IResolvable, typing.List[MrscalerAwsStepsFile]] = None,
  tags: typing.Union[IResolvable, typing.List[MrscalerAwsTags]] = None,
  task_desired_capacity: typing.Union[int, float] = None,
  task_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsTaskEbsBlockDevice]] = None,
  task_ebs_optimized: typing.Union[bool, IResolvable] = None,
  task_instance_types: typing.List[str] = None,
  task_lifecycle: str = None,
  task_max_size: typing.Union[int, float] = None,
  task_min_size: typing.Union[int, float] = None,
  task_scaling_down_policy: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingDownPolicy]] = None,
  task_scaling_up_policy: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingUpPolicy]] = None,
  task_unit: str = None,
  termination_policies: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPolicies]] = None,
  termination_protected: typing.Union[bool, IResolvable] = None,
  visible_to_all_users: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#name MrscalerAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.strategy">strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalInfo">additional_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalPrimarySecurityGroups">additional_primary_security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalReplicaSecurityGroups">additional_replica_security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.applications">applications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]</code> | applications block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.bootstrapActionsFile">bootstrap_actions_file</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]</code> | bootstrap_actions_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.configurationsFile">configurations_file</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]</code> | configurations_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreDesiredCapacity">core_desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsBlockDevice">core_ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]</code> | core_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsOptimized">core_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreInstanceTypes">core_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreLifecycle">core_lifecycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMaxSize">core_max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMinSize">core_min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingDownPolicy">core_scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]</code> | core_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingUpPolicy">core_scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]</code> | core_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreUnit">core_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.customAmiId">custom_ami_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#description MrscalerAws#description}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ebsRootVolumeSize">ebs_root_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ec2KeyName">ec2_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.exposeClusterId">expose_cluster_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#id MrscalerAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.instanceWeights">instance_weights</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]</code> | instance_weights block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.jobFlowRole">job_flow_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.keepJobFlowAlive">keep_job_flow_alive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.logUri">log_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedPrimarySecurityGroup">managed_primary_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedReplicaSecurityGroup">managed_replica_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsBlockDevice">master_ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]</code> | master_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsOptimized">master_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterInstanceTypes">master_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterLifecycle">master_lifecycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterTarget">master_target</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioningTimeout">provisioning_timeout</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | provisioning_timeout block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#region MrscalerAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.releaseLabel">release_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.repoUpgradeOnBoot">repo_upgrade_on_boot</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#retries MrscalerAws#retries}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.securityConfig">security_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceAccessSecurityGroup">service_access_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.stepsFile">steps_file</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]</code> | steps_file block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskDesiredCapacity">task_desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsBlockDevice">task_ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]</code> | task_ebs_block_device block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsOptimized">task_ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskInstanceTypes">task_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskLifecycle">task_lifecycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMaxSize">task_max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMinSize">task_min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingDownPolicy">task_scaling_down_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]</code> | task_scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingUpPolicy">task_scaling_up_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]</code> | task_scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskUnit">task_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationPolicies">termination_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]</code> | termination_policies block. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationProtected">termination_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.visibleToAllUsers">visible_to_all_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#name MrscalerAws#name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}.

---

##### `additional_info`<sup>Optional</sup> <a name="additional_info" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalInfo"></a>

```python
additional_info: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}.

---

##### `additional_primary_security_groups`<sup>Optional</sup> <a name="additional_primary_security_groups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalPrimarySecurityGroups"></a>

```python
additional_primary_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}.

---

##### `additional_replica_security_groups`<sup>Optional</sup> <a name="additional_replica_security_groups" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.additionalReplicaSecurityGroups"></a>

```python
additional_replica_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.applications"></a>

```python
applications: typing.Union[IResolvable, typing.List[MrscalerAwsApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]

applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#applications MrscalerAws#applications}

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}.

---

##### `bootstrap_actions_file`<sup>Optional</sup> <a name="bootstrap_actions_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.bootstrapActionsFile"></a>

```python
bootstrap_actions_file: typing.Union[IResolvable, typing.List[MrscalerAwsBootstrapActionsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]

bootstrap_actions_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#bootstrap_actions_file MrscalerAws#bootstrap_actions_file}

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}.

---

##### `configurations_file`<sup>Optional</sup> <a name="configurations_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.configurationsFile"></a>

```python
configurations_file: typing.Union[IResolvable, typing.List[MrscalerAwsConfigurationsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]

configurations_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#configurations_file MrscalerAws#configurations_file}

---

##### `core_desired_capacity`<sup>Optional</sup> <a name="core_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreDesiredCapacity"></a>

```python
core_desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}.

---

##### `core_ebs_block_device`<sup>Optional</sup> <a name="core_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsBlockDevice"></a>

```python
core_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsCoreEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]

core_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_ebs_block_device MrscalerAws#core_ebs_block_device}

---

##### `core_ebs_optimized`<sup>Optional</sup> <a name="core_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreEbsOptimized"></a>

```python
core_ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}.

---

##### `core_instance_types`<sup>Optional</sup> <a name="core_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreInstanceTypes"></a>

```python
core_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}.

---

##### `core_lifecycle`<sup>Optional</sup> <a name="core_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreLifecycle"></a>

```python
core_lifecycle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}.

---

##### `core_max_size`<sup>Optional</sup> <a name="core_max_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMaxSize"></a>

```python
core_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}.

---

##### `core_min_size`<sup>Optional</sup> <a name="core_min_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreMinSize"></a>

```python
core_min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}.

---

##### `core_scaling_down_policy`<sup>Optional</sup> <a name="core_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingDownPolicy"></a>

```python
core_scaling_down_policy: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]

core_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_scaling_down_policy MrscalerAws#core_scaling_down_policy}

---

##### `core_scaling_up_policy`<sup>Optional</sup> <a name="core_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreScalingUpPolicy"></a>

```python
core_scaling_up_policy: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]

core_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_scaling_up_policy MrscalerAws#core_scaling_up_policy}

---

##### `core_unit`<sup>Optional</sup> <a name="core_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.coreUnit"></a>

```python
core_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}.

---

##### `custom_ami_id`<sup>Optional</sup> <a name="custom_ami_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.customAmiId"></a>

```python
custom_ami_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#description MrscalerAws#description}.

---

##### `ebs_root_volume_size`<sup>Optional</sup> <a name="ebs_root_volume_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ebsRootVolumeSize"></a>

```python
ebs_root_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}.

---

##### `ec2_key_name`<sup>Optional</sup> <a name="ec2_key_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.ec2KeyName"></a>

```python
ec2_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}.

---

##### `expose_cluster_id`<sup>Optional</sup> <a name="expose_cluster_id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.exposeClusterId"></a>

```python
expose_cluster_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#id MrscalerAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_weights`<sup>Optional</sup> <a name="instance_weights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.instanceWeights"></a>

```python
instance_weights: typing.Union[IResolvable, typing.List[MrscalerAwsInstanceWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]

instance_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#instance_weights MrscalerAws#instance_weights}

---

##### `job_flow_role`<sup>Optional</sup> <a name="job_flow_role" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.jobFlowRole"></a>

```python
job_flow_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}.

---

##### `keep_job_flow_alive`<sup>Optional</sup> <a name="keep_job_flow_alive" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.keepJobFlowAlive"></a>

```python
keep_job_flow_alive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}.

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}.

---

##### `managed_primary_security_group`<sup>Optional</sup> <a name="managed_primary_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedPrimarySecurityGroup"></a>

```python
managed_primary_security_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}.

---

##### `managed_replica_security_group`<sup>Optional</sup> <a name="managed_replica_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.managedReplicaSecurityGroup"></a>

```python
managed_replica_security_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}.

---

##### `master_ebs_block_device`<sup>Optional</sup> <a name="master_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsBlockDevice"></a>

```python
master_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsMasterEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]

master_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_ebs_block_device MrscalerAws#master_ebs_block_device}

---

##### `master_ebs_optimized`<sup>Optional</sup> <a name="master_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterEbsOptimized"></a>

```python
master_ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}.

---

##### `master_instance_types`<sup>Optional</sup> <a name="master_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterInstanceTypes"></a>

```python
master_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}.

---

##### `master_lifecycle`<sup>Optional</sup> <a name="master_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterLifecycle"></a>

```python
master_lifecycle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}.

---

##### `master_target`<sup>Optional</sup> <a name="master_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.masterTarget"></a>

```python
master_target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}.

---

##### `provisioning_timeout`<sup>Optional</sup> <a name="provisioning_timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.provisioningTimeout"></a>

```python
provisioning_timeout: MrscalerAwsProvisioningTimeout
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

provisioning_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#provisioning_timeout MrscalerAws#provisioning_timeout}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#region MrscalerAws#region}.

---

##### `release_label`<sup>Optional</sup> <a name="release_label" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}.

---

##### `repo_upgrade_on_boot`<sup>Optional</sup> <a name="repo_upgrade_on_boot" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.repoUpgradeOnBoot"></a>

```python
repo_upgrade_on_boot: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#retries MrscalerAws#retries}.

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.scheduledTask"></a>

```python
scheduled_task: typing.Union[IResolvable, typing.List[MrscalerAwsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#scheduled_task MrscalerAws#scheduled_task}

---

##### `security_config`<sup>Optional</sup> <a name="security_config" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.securityConfig"></a>

```python
security_config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}.

---

##### `service_access_security_group`<sup>Optional</sup> <a name="service_access_security_group" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceAccessSecurityGroup"></a>

```python
service_access_security_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}.

---

##### `service_role`<sup>Optional</sup> <a name="service_role" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}.

---

##### `steps_file`<sup>Optional</sup> <a name="steps_file" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.stepsFile"></a>

```python
steps_file: typing.Union[IResolvable, typing.List[MrscalerAwsStepsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]

steps_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#steps_file MrscalerAws#steps_file}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[MrscalerAwsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#tags MrscalerAws#tags}

---

##### `task_desired_capacity`<sup>Optional</sup> <a name="task_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskDesiredCapacity"></a>

```python
task_desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}.

---

##### `task_ebs_block_device`<sup>Optional</sup> <a name="task_ebs_block_device" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsBlockDevice"></a>

```python
task_ebs_block_device: typing.Union[IResolvable, typing.List[MrscalerAwsTaskEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]

task_ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_ebs_block_device MrscalerAws#task_ebs_block_device}

---

##### `task_ebs_optimized`<sup>Optional</sup> <a name="task_ebs_optimized" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskEbsOptimized"></a>

```python
task_ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}.

---

##### `task_instance_types`<sup>Optional</sup> <a name="task_instance_types" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskInstanceTypes"></a>

```python
task_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}.

---

##### `task_lifecycle`<sup>Optional</sup> <a name="task_lifecycle" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskLifecycle"></a>

```python
task_lifecycle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}.

---

##### `task_max_size`<sup>Optional</sup> <a name="task_max_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMaxSize"></a>

```python
task_max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}.

---

##### `task_min_size`<sup>Optional</sup> <a name="task_min_size" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskMinSize"></a>

```python
task_min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}.

---

##### `task_scaling_down_policy`<sup>Optional</sup> <a name="task_scaling_down_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingDownPolicy"></a>

```python
task_scaling_down_policy: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]

task_scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_scaling_down_policy MrscalerAws#task_scaling_down_policy}

---

##### `task_scaling_up_policy`<sup>Optional</sup> <a name="task_scaling_up_policy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskScalingUpPolicy"></a>

```python
task_scaling_up_policy: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]

task_scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_scaling_up_policy MrscalerAws#task_scaling_up_policy}

---

##### `task_unit`<sup>Optional</sup> <a name="task_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.taskUnit"></a>

```python
task_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}.

---

##### `termination_policies`<sup>Optional</sup> <a name="termination_policies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationPolicies"></a>

```python
termination_policies: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]

termination_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#termination_policies MrscalerAws#termination_policies}

---

##### `termination_protected`<sup>Optional</sup> <a name="termination_protected" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.terminationProtected"></a>

```python
termination_protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}.

---

##### `visible_to_all_users`<sup>Optional</sup> <a name="visible_to_all_users" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfig.property.visibleToAllUsers"></a>

```python
visible_to_all_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}.

---

### MrscalerAwsConfigurationsFile <a name="MrscalerAwsConfigurationsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsConfigurationsFile(
  bucket: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsCoreEbsBlockDevice <a name="MrscalerAwsCoreEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreEbsBlockDevice(
  size_in_gb: typing.Union[int, float],
  volume_type: str,
  iops: typing.Union[int, float] = None,
  volumes_per_instance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumes_per_instance`<sup>Optional</sup> <a name="volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsCoreScalingDownPolicy <a name="MrscalerAwsCoreScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreScalingDownPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  unit: str,
  action_type: str = None,
  adjustment: str = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Mapping[str] = None,
  evaluation_periods: typing.Union[int, float] = None,
  maximum: str = None,
  max_target_capacity: str = None,
  minimum: str = None,
  min_target_capacity: str = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maximum">maximum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `max_target_capacity`<sup>Optional</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `min_target_capacity`<sup>Optional</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsCoreScalingUpPolicy <a name="MrscalerAwsCoreScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreScalingUpPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  unit: str,
  action_type: str = None,
  adjustment: str = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Mapping[str] = None,
  evaluation_periods: typing.Union[int, float] = None,
  maximum: str = None,
  max_target_capacity: str = None,
  minimum: str = None,
  min_target_capacity: str = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maximum">maximum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `max_target_capacity`<sup>Optional</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `min_target_capacity`<sup>Optional</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsInstanceWeights <a name="MrscalerAwsInstanceWeights" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsInstanceWeights(
  instance_type: str,
  weighted_capacity: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#instance_type MrscalerAws#instance_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#weighted_capacity MrscalerAws#weighted_capacity}. |

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#instance_type MrscalerAws#instance_type}.

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#weighted_capacity MrscalerAws#weighted_capacity}.

---

### MrscalerAwsMasterEbsBlockDevice <a name="MrscalerAwsMasterEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsMasterEbsBlockDevice(
  size_in_gb: typing.Union[int, float],
  volume_type: str,
  iops: typing.Union[int, float] = None,
  volumes_per_instance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumes_per_instance`<sup>Optional</sup> <a name="volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsProvisioningTimeout <a name="MrscalerAwsProvisioningTimeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsProvisioningTimeout(
  timeout: typing.Union[int, float],
  timeout_action: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#timeout MrscalerAws#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeoutAction">timeout_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#timeout_action MrscalerAws#timeout_action}. |

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#timeout MrscalerAws#timeout}.

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#timeout_action MrscalerAws#timeout_action}.

---

### MrscalerAwsScheduledTask <a name="MrscalerAwsScheduledTask" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsScheduledTask(
  cron: str,
  instance_group_type: str,
  task_type: str,
  desired_capacity: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  max_capacity: str = None,
  min_capacity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.cron">cron</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cron MrscalerAws#cron}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.instanceGroupType">instance_group_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#instance_group_type MrscalerAws#instance_group_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_type MrscalerAws#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.desiredCapacity">desired_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#desired_capacity MrscalerAws#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#is_enabled MrscalerAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.maxCapacity">max_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_capacity MrscalerAws#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.minCapacity">min_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_capacity MrscalerAws#min_capacity}. |

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.cron"></a>

```python
cron: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cron MrscalerAws#cron}.

---

##### `instance_group_type`<sup>Required</sup> <a name="instance_group_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.instanceGroupType"></a>

```python
instance_group_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#instance_group_type MrscalerAws#instance_group_type}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#task_type MrscalerAws#task_type}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.desiredCapacity"></a>

```python
desired_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#desired_capacity MrscalerAws#desired_capacity}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#is_enabled MrscalerAws#is_enabled}.

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.maxCapacity"></a>

```python
max_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_capacity MrscalerAws#max_capacity}.

---

##### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask.property.minCapacity"></a>

```python
min_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_capacity MrscalerAws#min_capacity}.

---

### MrscalerAwsStepsFile <a name="MrscalerAwsStepsFile" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsStepsFile(
  bucket: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#key MrscalerAws#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

### MrscalerAwsTags <a name="MrscalerAwsTags" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#key MrscalerAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#value MrscalerAws#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#key MrscalerAws#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#value MrscalerAws#value}.

---

### MrscalerAwsTaskEbsBlockDevice <a name="MrscalerAwsTaskEbsBlockDevice" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskEbsBlockDevice(
  size_in_gb: typing.Union[int, float],
  volume_type: str,
  iops: typing.Union[int, float] = None,
  volumes_per_instance: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}. |

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}.

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}.

---

##### `volumes_per_instance`<sup>Optional</sup> <a name="volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}.

---

### MrscalerAwsTaskScalingDownPolicy <a name="MrscalerAwsTaskScalingDownPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskScalingDownPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  unit: str,
  action_type: str = None,
  adjustment: str = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Mapping[str] = None,
  evaluation_periods: typing.Union[int, float] = None,
  maximum: str = None,
  max_target_capacity: str = None,
  minimum: str = None,
  min_target_capacity: str = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maximum">maximum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `max_target_capacity`<sup>Optional</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `min_target_capacity`<sup>Optional</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsTaskScalingUpPolicy <a name="MrscalerAwsTaskScalingUpPolicy" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskScalingUpPolicy(
  metric_name: str,
  namespace: str,
  policy_name: str,
  threshold: typing.Union[int, float],
  unit: str,
  action_type: str = None,
  adjustment: str = None,
  cooldown: typing.Union[int, float] = None,
  dimensions: typing.Mapping[str] = None,
  evaluation_periods: typing.Union[int, float] = None,
  maximum: str = None,
  max_target_capacity: str = None,
  minimum: str = None,
  min_target_capacity: str = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maximum">maximum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#target MrscalerAws#target}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}.

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}.

---

##### `max_target_capacity`<sup>Optional</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}.

---

##### `min_target_capacity`<sup>Optional</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#target MrscalerAws#target}.

---

### MrscalerAwsTerminationPolicies <a name="MrscalerAwsTerminationPolicies" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTerminationPolicies(
  statements: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPoliciesStatements]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.property.statements">statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]]</code> | statements block. |

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies.property.statements"></a>

```python
statements: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPoliciesStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]]

statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statements MrscalerAws#statements}

---

### MrscalerAwsTerminationPoliciesStatements <a name="MrscalerAwsTerminationPoliciesStatements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTerminationPoliciesStatements(
  metric_name: str,
  namespace: str,
  threshold: typing.Union[int, float],
  evaluation_periods: typing.Union[int, float] = None,
  operator: str = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}.

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#period MrscalerAws#period}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.208.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrscalerAwsApplicationsList <a name="MrscalerAwsApplicationsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsApplicationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]]

---


### MrscalerAwsApplicationsOutputReference <a name="MrscalerAwsApplicationsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsApplications]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsApplications">MrscalerAwsApplications</a>]

---


### MrscalerAwsBootstrapActionsFileList <a name="MrscalerAwsBootstrapActionsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsBootstrapActionsFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsBootstrapActionsFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsBootstrapActionsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]]

---


### MrscalerAwsBootstrapActionsFileOutputReference <a name="MrscalerAwsBootstrapActionsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFileOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsBootstrapActionsFile]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsBootstrapActionsFile">MrscalerAwsBootstrapActionsFile</a>]

---


### MrscalerAwsConfigurationsFileList <a name="MrscalerAwsConfigurationsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsConfigurationsFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsConfigurationsFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsConfigurationsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]]

---


### MrscalerAwsConfigurationsFileOutputReference <a name="MrscalerAwsConfigurationsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsConfigurationsFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFileOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsConfigurationsFile]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsConfigurationsFile">MrscalerAwsConfigurationsFile</a>]

---


### MrscalerAwsCoreEbsBlockDeviceList <a name="MrscalerAwsCoreEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsCoreEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsCoreEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]]

---


### MrscalerAwsCoreEbsBlockDeviceOutputReference <a name="MrscalerAwsCoreEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetVolumesPerInstance">reset_volumes_per_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_volumes_per_instance` <a name="reset_volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```python
def reset_volumes_per_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGbInput">size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumes_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gb_input`<sup>Optional</sup> <a name="size_in_gb_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```python
size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes_per_instance_input`<sup>Optional</sup> <a name="volumes_per_instance_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```python
volumes_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes_per_instance`<sup>Required</sup> <a name="volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsCoreEbsBlockDevice]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreEbsBlockDevice">MrscalerAwsCoreEbsBlockDevice</a>]

---


### MrscalerAwsCoreScalingDownPolicyList <a name="MrscalerAwsCoreScalingDownPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreScalingDownPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsCoreScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]]

---


### MrscalerAwsCoreScalingDownPolicyOutputReference <a name="MrscalerAwsCoreScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaxTargetCapacity">reset_max_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinTargetCapacity">reset_min_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_target_capacity` <a name="reset_max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```python
def reset_max_target_capacity() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_target_capacity` <a name="reset_min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```python
def reset_min_target_capacity() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximumInput">maximum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacityInput">max_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacityInput">min_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximum">maximum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximumInput"></a>

```python
maximum_input: str
```

- *Type:* str

---

##### `max_target_capacity_input`<sup>Optional</sup> <a name="max_target_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```python
max_target_capacity_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `min_target_capacity_input`<sup>Optional</sup> <a name="min_target_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```python
min_target_capacity_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

---

##### `max_target_capacity`<sup>Required</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `min_target_capacity`<sup>Required</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsCoreScalingDownPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingDownPolicy">MrscalerAwsCoreScalingDownPolicy</a>]

---


### MrscalerAwsCoreScalingUpPolicyList <a name="MrscalerAwsCoreScalingUpPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreScalingUpPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsCoreScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsCoreScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]]

---


### MrscalerAwsCoreScalingUpPolicyOutputReference <a name="MrscalerAwsCoreScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaxTargetCapacity">reset_max_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinTargetCapacity">reset_min_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_target_capacity` <a name="reset_max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```python
def reset_max_target_capacity() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_target_capacity` <a name="reset_min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```python
def reset_min_target_capacity() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximumInput">maximum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacityInput">max_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacityInput">min_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximum">maximum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximumInput"></a>

```python
maximum_input: str
```

- *Type:* str

---

##### `max_target_capacity_input`<sup>Optional</sup> <a name="max_target_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```python
max_target_capacity_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `min_target_capacity_input`<sup>Optional</sup> <a name="min_target_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```python
min_target_capacity_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

---

##### `max_target_capacity`<sup>Required</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `min_target_capacity`<sup>Required</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsCoreScalingUpPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsCoreScalingUpPolicy">MrscalerAwsCoreScalingUpPolicy</a>]

---


### MrscalerAwsInstanceWeightsList <a name="MrscalerAwsInstanceWeightsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsInstanceWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsInstanceWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsInstanceWeights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]]

---


### MrscalerAwsInstanceWeightsOutputReference <a name="MrscalerAwsInstanceWeightsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsInstanceWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacityInput">weighted_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacity">weighted_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `weighted_capacity_input`<sup>Optional</sup> <a name="weighted_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacityInput"></a>

```python
weighted_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `weighted_capacity`<sup>Required</sup> <a name="weighted_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.weightedCapacity"></a>

```python
weighted_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeightsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsInstanceWeights]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsInstanceWeights">MrscalerAwsInstanceWeights</a>]

---


### MrscalerAwsMasterEbsBlockDeviceList <a name="MrscalerAwsMasterEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsMasterEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsMasterEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]]

---


### MrscalerAwsMasterEbsBlockDeviceOutputReference <a name="MrscalerAwsMasterEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetVolumesPerInstance">reset_volumes_per_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_volumes_per_instance` <a name="reset_volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```python
def reset_volumes_per_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGbInput">size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumes_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gb_input`<sup>Optional</sup> <a name="size_in_gb_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```python
size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes_per_instance_input`<sup>Optional</sup> <a name="volumes_per_instance_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```python
volumes_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes_per_instance`<sup>Required</sup> <a name="volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsMasterEbsBlockDevice]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsMasterEbsBlockDevice">MrscalerAwsMasterEbsBlockDevice</a>]

---


### MrscalerAwsProvisioningTimeoutOutputReference <a name="MrscalerAwsProvisioningTimeoutOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutActionInput">timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutAction">timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeout_action_input`<sup>Optional</sup> <a name="timeout_action_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutActionInput"></a>

```python
timeout_action_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: MrscalerAwsProvisioningTimeout
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsProvisioningTimeout">MrscalerAwsProvisioningTimeout</a>

---


### MrscalerAwsScheduledTaskList <a name="MrscalerAwsScheduledTaskList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsScheduledTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]]

---


### MrscalerAwsScheduledTaskOutputReference <a name="MrscalerAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsScheduledTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetDesiredCapacity">reset_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMinCapacity">reset_min_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_desired_capacity` <a name="reset_desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetDesiredCapacity"></a>

```python
def reset_desired_capacity() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_capacity` <a name="reset_min_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.resetMinCapacity"></a>

```python
def reset_min_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cronInput">cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupTypeInput">instance_group_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacityInput">min_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cron">cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacity">desired_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupType">instance_group_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacity">max_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacity">min_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_input`<sup>Optional</sup> <a name="cron_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cronInput"></a>

```python
cron_input: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacityInput"></a>

```python
desired_capacity_input: str
```

- *Type:* str

---

##### `instance_group_type_input`<sup>Optional</sup> <a name="instance_group_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupTypeInput"></a>

```python
instance_group_type_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: str
```

- *Type:* str

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacityInput"></a>

```python
min_capacity_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.cron"></a>

```python
cron: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.desiredCapacity"></a>

```python
desired_capacity: str
```

- *Type:* str

---

##### `instance_group_type`<sup>Required</sup> <a name="instance_group_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.instanceGroupType"></a>

```python
instance_group_type: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.maxCapacity"></a>

```python
max_capacity: str
```

- *Type:* str

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.minCapacity"></a>

```python
min_capacity: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsScheduledTask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsScheduledTask">MrscalerAwsScheduledTask</a>]

---


### MrscalerAwsStepsFileList <a name="MrscalerAwsStepsFileList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsStepsFileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsStepsFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsStepsFile]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]]

---


### MrscalerAwsStepsFileOutputReference <a name="MrscalerAwsStepsFileOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsStepsFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFileOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsStepsFile]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsStepsFile">MrscalerAwsStepsFile</a>]

---


### MrscalerAwsTagsList <a name="MrscalerAwsTagsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]]

---


### MrscalerAwsTagsOutputReference <a name="MrscalerAwsTagsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTags">MrscalerAwsTags</a>]

---


### MrscalerAwsTaskEbsBlockDeviceList <a name="MrscalerAwsTaskEbsBlockDeviceList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsTaskEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsTaskEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]]

---


### MrscalerAwsTaskEbsBlockDeviceOutputReference <a name="MrscalerAwsTaskEbsBlockDeviceOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetVolumesPerInstance">reset_volumes_per_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_volumes_per_instance` <a name="reset_volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.resetVolumesPerInstance"></a>

```python
def reset_volumes_per_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGbInput">size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstanceInput">volumes_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstance">volumes_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gb_input`<sup>Optional</sup> <a name="size_in_gb_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGbInput"></a>

```python
size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes_per_instance_input`<sup>Optional</sup> <a name="volumes_per_instance_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstanceInput"></a>

```python
volumes_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes_per_instance`<sup>Required</sup> <a name="volumes_per_instance" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumesPerInstance"></a>

```python
volumes_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsTaskEbsBlockDevice]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskEbsBlockDevice">MrscalerAwsTaskEbsBlockDevice</a>]

---


### MrscalerAwsTaskScalingDownPolicyList <a name="MrscalerAwsTaskScalingDownPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskScalingDownPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsTaskScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingDownPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]]

---


### MrscalerAwsTaskScalingDownPolicyOutputReference <a name="MrscalerAwsTaskScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaxTargetCapacity">reset_max_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinTargetCapacity">reset_min_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_target_capacity` <a name="reset_max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMaxTargetCapacity"></a>

```python
def reset_max_target_capacity() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_target_capacity` <a name="reset_min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetMinTargetCapacity"></a>

```python
def reset_min_target_capacity() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximumInput">maximum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacityInput">max_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacityInput">min_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximum">maximum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximumInput"></a>

```python
maximum_input: str
```

- *Type:* str

---

##### `max_target_capacity_input`<sup>Optional</sup> <a name="max_target_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacityInput"></a>

```python
max_target_capacity_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `min_target_capacity_input`<sup>Optional</sup> <a name="min_target_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacityInput"></a>

```python
min_target_capacity_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

---

##### `max_target_capacity`<sup>Required</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `min_target_capacity`<sup>Required</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsTaskScalingDownPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingDownPolicy">MrscalerAwsTaskScalingDownPolicy</a>]

---


### MrscalerAwsTaskScalingUpPolicyList <a name="MrscalerAwsTaskScalingUpPolicyList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskScalingUpPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsTaskScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsTaskScalingUpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]]

---


### MrscalerAwsTaskScalingUpPolicyOutputReference <a name="MrscalerAwsTaskScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetAdjustment">reset_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaxTargetCapacity">reset_max_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinTargetCapacity">reset_min_target_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_type` <a name="reset_action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_adjustment` <a name="reset_adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetAdjustment"></a>

```python
def reset_adjustment() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_max_target_capacity` <a name="reset_max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMaxTargetCapacity"></a>

```python
def reset_max_target_capacity() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_min_target_capacity` <a name="reset_min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetMinTargetCapacity"></a>

```python
def reset_min_target_capacity() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustmentInput">adjustment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximumInput">maximum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacityInput">max_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacityInput">min_target_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximum">maximum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacity">max_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacity">min_target_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `adjustment_input`<sup>Optional</sup> <a name="adjustment_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```python
adjustment_input: str
```

- *Type:* str

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximumInput"></a>

```python
maximum_input: str
```

- *Type:* str

---

##### `max_target_capacity_input`<sup>Optional</sup> <a name="max_target_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacityInput"></a>

```python
max_target_capacity_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `min_target_capacity_input`<sup>Optional</sup> <a name="min_target_capacity_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacityInput"></a>

```python
min_target_capacity_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.adjustment"></a>

```python
adjustment: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maximum"></a>

```python
maximum: str
```

- *Type:* str

---

##### `max_target_capacity`<sup>Required</sup> <a name="max_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.maxTargetCapacity"></a>

```python
max_target_capacity: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `min_target_capacity`<sup>Required</sup> <a name="min_target_capacity" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.minTargetCapacity"></a>

```python
min_target_capacity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsTaskScalingUpPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTaskScalingUpPolicy">MrscalerAwsTaskScalingUpPolicy</a>]

---


### MrscalerAwsTerminationPoliciesList <a name="MrscalerAwsTerminationPoliciesList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTerminationPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsTerminationPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]]

---


### MrscalerAwsTerminationPoliciesOutputReference <a name="MrscalerAwsTerminationPoliciesOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.putStatements">put_statements</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_statements` <a name="put_statements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.putStatements"></a>

```python
def put_statements(
  value: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPoliciesStatements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.putStatements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statements">statements</a></code> | <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList">MrscalerAwsTerminationPoliciesStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statementsInput">statements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statements"></a>

```python
statements: MrscalerAwsTerminationPoliciesStatementsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList">MrscalerAwsTerminationPoliciesStatementsList</a>

---

##### `statements_input`<sup>Optional</sup> <a name="statements_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.statementsInput"></a>

```python
statements_input: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPoliciesStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsTerminationPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPolicies">MrscalerAwsTerminationPolicies</a>]

---


### MrscalerAwsTerminationPoliciesStatementsList <a name="MrscalerAwsTerminationPoliciesStatementsList" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrscalerAwsTerminationPoliciesStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MrscalerAwsTerminationPoliciesStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]]

---


### MrscalerAwsTerminationPoliciesStatementsOutputReference <a name="MrscalerAwsTerminationPoliciesStatementsOutputReference" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import mrscaler_aws

mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrscalerAwsTerminationPoliciesStatements]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.mrscalerAws.MrscalerAwsTerminationPoliciesStatements">MrscalerAwsTerminationPoliciesStatements</a>]

---



