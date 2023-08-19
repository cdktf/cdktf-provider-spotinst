# `spotinst_elastigroup_gcp`

Refer to the Terraform Registory for docs: [`spotinst_elastigroup_gcp`](https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp).

# `elastigroupGcp` Submodule <a name="`elastigroupGcp` Submodule" id="@cdktf/provider-spotinst.elastigroupGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupGcp <a name="ElastigroupGcp" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp spotinst_elastigroup_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcp;

ElastigroupGcp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .desiredCapacity(java.lang.Number)
    .name(java.lang.String)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .backendServices(IResolvable)
//  .backendServices(java.util.List<ElastigroupGcpBackendServices>)
//  .description(java.lang.String)
//  .disk(IResolvable)
//  .disk(java.util.List<ElastigroupGcpDisk>)
//  .drainingTimeout(java.lang.Number)
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .gpu(IResolvable)
//  .gpu(java.util.List<ElastigroupGcpGpu>)
//  .healthCheckGracePeriod(java.lang.Number)
//  .healthCheckType(java.lang.String)
//  .id(java.lang.String)
//  .instanceNamePrefix(java.lang.String)
//  .instanceTypesCustom(IResolvable)
//  .instanceTypesCustom(java.util.List<ElastigroupGcpInstanceTypesCustom>)
//  .instanceTypesOndemand(java.lang.String)
//  .instanceTypesPreemptible(java.util.List<java.lang.String>)
//  .integrationDockerSwarm(ElastigroupGcpIntegrationDockerSwarm)
//  .integrationGke(ElastigroupGcpIntegrationGke)
//  .ipForwarding(java.lang.Boolean)
//  .ipForwarding(IResolvable)
//  .labels(IResolvable)
//  .labels(java.util.List<ElastigroupGcpLabels>)
//  .maxSize(java.lang.Number)
//  .metadata(IResolvable)
//  .metadata(java.util.List<ElastigroupGcpMetadata>)
//  .minSize(java.lang.Number)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<ElastigroupGcpNetworkInterface>)
//  .ondemandCount(java.lang.Number)
//  .preemptiblePercentage(java.lang.Number)
//  .provisioningModel(java.lang.String)
//  .scalingDownPolicy(IResolvable)
//  .scalingDownPolicy(java.util.List<ElastigroupGcpScalingDownPolicy>)
//  .scalingUpPolicy(IResolvable)
//  .scalingUpPolicy(java.util.List<ElastigroupGcpScalingUpPolicy>)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<ElastigroupGcpScheduledTask>)
//  .serviceAccount(java.lang.String)
//  .shutdownScript(java.lang.String)
//  .startupScript(java.lang.String)
//  .subnets(IResolvable)
//  .subnets(java.util.List<ElastigroupGcpSubnets>)
//  .tags(java.util.List<java.lang.String>)
//  .unhealthyDuration(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.backendServices">backendServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>></code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#description ElastigroupGcp#description}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.gpu">gpu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>></code> | gpu block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#id ElastigroupGcp#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceNamePrefix">instanceNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesCustom">instanceTypesCustom</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>></code> | instance_types_custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesOndemand">instanceTypesOndemand</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesPreemptible">instanceTypesPreemptible</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.integrationDockerSwarm">integrationDockerSwarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | integration_docker_swarm block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.integrationGke">integrationGke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | integration_gke block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.ipForwarding">ipForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#max_size ElastigroupGcp#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>></code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#min_size ElastigroupGcp#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.ondemandCount">ondemandCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.preemptiblePercentage">preemptiblePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scalingDownPolicy">scalingDownPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>></code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scalingUpPolicy">scalingUpPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>></code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#service_account ElastigroupGcp#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.shutdownScript">shutdownScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.startupScript">startupScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.subnets">subnets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>></code> | subnets block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#tags ElastigroupGcp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.unhealthyDuration">unhealthyDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.desiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.autoHealing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}.

---

##### `backendServices`<sup>Optional</sup> <a name="backendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.backendServices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>>

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#backend_services ElastigroupGcp#backend_services}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#description ElastigroupGcp#description}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.disk"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#disk ElastigroupGcp#disk}

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.drainingTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.fallbackToOndemand"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.gpu"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>>

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#gpu ElastigroupGcp#gpu}

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.healthCheckGracePeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}.

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.healthCheckType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#id ElastigroupGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceNamePrefix`<sup>Optional</sup> <a name="instanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceNamePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}.

---

##### `instanceTypesCustom`<sup>Optional</sup> <a name="instanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesCustom"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>>

instance_types_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_custom ElastigroupGcp#instance_types_custom}

---

##### `instanceTypesOndemand`<sup>Optional</sup> <a name="instanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesOndemand"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}.

---

##### `instanceTypesPreemptible`<sup>Optional</sup> <a name="instanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.instanceTypesPreemptible"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}.

---

##### `integrationDockerSwarm`<sup>Optional</sup> <a name="integrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.integrationDockerSwarm"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

integration_docker_swarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#integration_docker_swarm ElastigroupGcp#integration_docker_swarm}

---

##### `integrationGke`<sup>Optional</sup> <a name="integrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.integrationGke"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

integration_gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#integration_gke ElastigroupGcp#integration_gke}

---

##### `ipForwarding`<sup>Optional</sup> <a name="ipForwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.ipForwarding"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#labels ElastigroupGcp#labels}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#max_size ElastigroupGcp#max_size}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.metadata"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#metadata ElastigroupGcp#metadata}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#min_size ElastigroupGcp#min_size}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#network_interface ElastigroupGcp#network_interface}

---

##### `ondemandCount`<sup>Optional</sup> <a name="ondemandCount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.ondemandCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}.

---

##### `preemptiblePercentage`<sup>Optional</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.preemptiblePercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}.

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.provisioningModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}.

---

##### `scalingDownPolicy`<sup>Optional</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scalingDownPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>>

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#scaling_down_policy ElastigroupGcp#scaling_down_policy}

---

##### `scalingUpPolicy`<sup>Optional</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scalingUpPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>>

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#scaling_up_policy ElastigroupGcp#scaling_up_policy}

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.scheduledTask"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#scheduled_task ElastigroupGcp#scheduled_task}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#service_account ElastigroupGcp#service_account}.

---

##### `shutdownScript`<sup>Optional</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.shutdownScript"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}.

---

##### `startupScript`<sup>Optional</sup> <a name="startupScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.startupScript"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.subnets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>>

subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#subnets ElastigroupGcp#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#tags ElastigroupGcp#tags}.

---

##### `unhealthyDuration`<sup>Optional</sup> <a name="unhealthyDuration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.Initializer.parameter.unhealthyDuration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices">putBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu">putGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom">putInstanceTypesCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm">putIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke">putIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy">putScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy">putScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets">putSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetBackendServices">resetBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetGpu">resetGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckGracePeriod">resetHealthCheckGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceNamePrefix">resetInstanceNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesCustom">resetInstanceTypesCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesOndemand">resetInstanceTypesOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesPreemptible">resetInstanceTypesPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationDockerSwarm">resetIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationGke">resetIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIpForwarding">resetIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOndemandCount">resetOndemandCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetPreemptiblePercentage">resetPreemptiblePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingDownPolicy">resetScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingUpPolicy">resetScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetShutdownScript">resetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetStartupScript">resetStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetUnhealthyDuration">resetUnhealthyDuration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBackendServices` <a name="putBackendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices"></a>

```java
public void putBackendServices(IResolvable OR java.util.List<ElastigroupGcpBackendServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putBackendServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>>

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk"></a>

```java
public void putDisk(IResolvable OR java.util.List<ElastigroupGcpDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>>

---

##### `putGpu` <a name="putGpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu"></a>

```java
public void putGpu(IResolvable OR java.util.List<ElastigroupGcpGpu> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putGpu.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>>

---

##### `putInstanceTypesCustom` <a name="putInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom"></a>

```java
public void putInstanceTypesCustom(IResolvable OR java.util.List<ElastigroupGcpInstanceTypesCustom> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putInstanceTypesCustom.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>>

---

##### `putIntegrationDockerSwarm` <a name="putIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm"></a>

```java
public void putIntegrationDockerSwarm(ElastigroupGcpIntegrationDockerSwarm value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationDockerSwarm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

---

##### `putIntegrationGke` <a name="putIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke"></a>

```java
public void putIntegrationGke(ElastigroupGcpIntegrationGke value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putIntegrationGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<ElastigroupGcpLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata"></a>

```java
public void putMetadata(IResolvable OR java.util.List<ElastigroupGcpMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putMetadata.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<ElastigroupGcpNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>>

---

##### `putScalingDownPolicy` <a name="putScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy"></a>

```java
public void putScalingDownPolicy(IResolvable OR java.util.List<ElastigroupGcpScalingDownPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingDownPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>>

---

##### `putScalingUpPolicy` <a name="putScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy"></a>

```java
public void putScalingUpPolicy(IResolvable OR java.util.List<ElastigroupGcpScalingUpPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScalingUpPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>>

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask"></a>

```java
public void putScheduledTask(IResolvable OR java.util.List<ElastigroupGcpScheduledTask> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putScheduledTask.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>>

---

##### `putSubnets` <a name="putSubnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets"></a>

```java
public void putSubnets(IResolvable OR java.util.List<ElastigroupGcpSubnets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.putSubnets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>>

---

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAutoHealing"></a>

```java
public void resetAutoHealing()
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetBackendServices` <a name="resetBackendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetBackendServices"></a>

```java
public void resetBackendServices()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetDrainingTimeout"></a>

```java
public void resetDrainingTimeout()
```

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetFallbackToOndemand"></a>

```java
public void resetFallbackToOndemand()
```

##### `resetGpu` <a name="resetGpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetGpu"></a>

```java
public void resetGpu()
```

##### `resetHealthCheckGracePeriod` <a name="resetHealthCheckGracePeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckGracePeriod"></a>

```java
public void resetHealthCheckGracePeriod()
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetHealthCheckType"></a>

```java
public void resetHealthCheckType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceNamePrefix` <a name="resetInstanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceNamePrefix"></a>

```java
public void resetInstanceNamePrefix()
```

##### `resetInstanceTypesCustom` <a name="resetInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesCustom"></a>

```java
public void resetInstanceTypesCustom()
```

##### `resetInstanceTypesOndemand` <a name="resetInstanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesOndemand"></a>

```java
public void resetInstanceTypesOndemand()
```

##### `resetInstanceTypesPreemptible` <a name="resetInstanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetInstanceTypesPreemptible"></a>

```java
public void resetInstanceTypesPreemptible()
```

##### `resetIntegrationDockerSwarm` <a name="resetIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationDockerSwarm"></a>

```java
public void resetIntegrationDockerSwarm()
```

##### `resetIntegrationGke` <a name="resetIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIntegrationGke"></a>

```java
public void resetIntegrationGke()
```

##### `resetIpForwarding` <a name="resetIpForwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetIpForwarding"></a>

```java
public void resetIpForwarding()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetOndemandCount` <a name="resetOndemandCount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetOndemandCount"></a>

```java
public void resetOndemandCount()
```

##### `resetPreemptiblePercentage` <a name="resetPreemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetPreemptiblePercentage"></a>

```java
public void resetPreemptiblePercentage()
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetProvisioningModel"></a>

```java
public void resetProvisioningModel()
```

##### `resetScalingDownPolicy` <a name="resetScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingDownPolicy"></a>

```java
public void resetScalingDownPolicy()
```

##### `resetScalingUpPolicy` <a name="resetScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScalingUpPolicy"></a>

```java
public void resetScalingUpPolicy()
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetScheduledTask"></a>

```java
public void resetScheduledTask()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetShutdownScript` <a name="resetShutdownScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetShutdownScript"></a>

```java
public void resetShutdownScript()
```

##### `resetStartupScript` <a name="resetStartupScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetStartupScript"></a>

```java
public void resetStartupScript()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetTags"></a>

```java
public void resetTags()
```

##### `resetUnhealthyDuration` <a name="resetUnhealthyDuration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.resetUnhealthyDuration"></a>

```java
public void resetUnhealthyDuration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcp;

ElastigroupGcp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcp;

ElastigroupGcp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcp;

ElastigroupGcp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServices">backendServices</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList">ElastigroupGcpBackendServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList">ElastigroupGcpDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList">ElastigroupGcpGpuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustom">instanceTypesCustom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList">ElastigroupGcpInstanceTypesCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarm">integrationDockerSwarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference">ElastigroupGcpIntegrationDockerSwarmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGke">integrationGke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference">ElastigroupGcpIntegrationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList">ElastigroupGcpLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList">ElastigroupGcpMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList">ElastigroupGcpNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicy">scalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList">ElastigroupGcpScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicy">scalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList">ElastigroupGcpScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList">ElastigroupGcpScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnets">subnets</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList">ElastigroupGcpSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealingInput">autoHealingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServicesInput">backendServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.diskInput">diskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpuInput">gpuInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriodInput">healthCheckGracePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefixInput">instanceNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustomInput">instanceTypesCustomInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemandInput">instanceTypesOndemandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptibleInput">instanceTypesPreemptibleInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarmInput">integrationDockerSwarmInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGkeInput">integrationGkeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwardingInput">ipForwardingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadataInput">metadataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCountInput">ondemandCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentageInput">preemptiblePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModelInput">provisioningModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicyInput">scalingDownPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicyInput">scalingUpPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScriptInput">shutdownScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScriptInput">startupScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnetsInput">subnetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDurationInput">unhealthyDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefix">instanceNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemand">instanceTypesOndemand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptible">instanceTypesPreemptible</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwarding">ipForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCount">ondemandCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScript">shutdownScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScript">startupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDuration">unhealthyDuration</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendServices`<sup>Required</sup> <a name="backendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServices"></a>

```java
public ElastigroupGcpBackendServicesList getBackendServices();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList">ElastigroupGcpBackendServicesList</a>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.disk"></a>

```java
public ElastigroupGcpDiskList getDisk();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList">ElastigroupGcpDiskList</a>

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpu"></a>

```java
public ElastigroupGcpGpuList getGpu();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList">ElastigroupGcpGpuList</a>

---

##### `instanceTypesCustom`<sup>Required</sup> <a name="instanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustom"></a>

```java
public ElastigroupGcpInstanceTypesCustomList getInstanceTypesCustom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList">ElastigroupGcpInstanceTypesCustomList</a>

---

##### `integrationDockerSwarm`<sup>Required</sup> <a name="integrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarm"></a>

```java
public ElastigroupGcpIntegrationDockerSwarmOutputReference getIntegrationDockerSwarm();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference">ElastigroupGcpIntegrationDockerSwarmOutputReference</a>

---

##### `integrationGke`<sup>Required</sup> <a name="integrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGke"></a>

```java
public ElastigroupGcpIntegrationGkeOutputReference getIntegrationGke();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference">ElastigroupGcpIntegrationGkeOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labels"></a>

```java
public ElastigroupGcpLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList">ElastigroupGcpLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadata"></a>

```java
public ElastigroupGcpMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList">ElastigroupGcpMetadataList</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterface"></a>

```java
public ElastigroupGcpNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList">ElastigroupGcpNetworkInterfaceList</a>

---

##### `scalingDownPolicy`<sup>Required</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicy"></a>

```java
public ElastigroupGcpScalingDownPolicyList getScalingDownPolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList">ElastigroupGcpScalingDownPolicyList</a>

---

##### `scalingUpPolicy`<sup>Required</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicy"></a>

```java
public ElastigroupGcpScalingUpPolicyList getScalingUpPolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList">ElastigroupGcpScalingUpPolicyList</a>

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTask"></a>

```java
public ElastigroupGcpScheduledTaskList getScheduledTask();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList">ElastigroupGcpScheduledTaskList</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnets"></a>

```java
public ElastigroupGcpSubnetsList getSubnets();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList">ElastigroupGcpSubnetsList</a>

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealingInput"></a>

```java
public java.lang.Object getAutoHealingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendServicesInput`<sup>Optional</sup> <a name="backendServicesInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.backendServicesInput"></a>

```java
public java.lang.Object getBackendServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacityInput"></a>

```java
public java.lang.Number getDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.diskInput"></a>

```java
public java.lang.Object getDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>>

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeoutInput"></a>

```java
public java.lang.Number getDrainingTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemandInput"></a>

```java
public java.lang.Object getFallbackToOndemandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gpuInput`<sup>Optional</sup> <a name="gpuInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.gpuInput"></a>

```java
public java.lang.Object getGpuInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>>

---

##### `healthCheckGracePeriodInput`<sup>Optional</sup> <a name="healthCheckGracePeriodInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriodInput"></a>

```java
public java.lang.Number getHealthCheckGracePeriodInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckTypeInput"></a>

```java
public java.lang.String getHealthCheckTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceNamePrefixInput`<sup>Optional</sup> <a name="instanceNamePrefixInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefixInput"></a>

```java
public java.lang.String getInstanceNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `instanceTypesCustomInput`<sup>Optional</sup> <a name="instanceTypesCustomInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesCustomInput"></a>

```java
public java.lang.Object getInstanceTypesCustomInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>>

---

##### `instanceTypesOndemandInput`<sup>Optional</sup> <a name="instanceTypesOndemandInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemandInput"></a>

```java
public java.lang.String getInstanceTypesOndemandInput();
```

- *Type:* java.lang.String

---

##### `instanceTypesPreemptibleInput`<sup>Optional</sup> <a name="instanceTypesPreemptibleInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptibleInput"></a>

```java
public java.util.List<java.lang.String> getInstanceTypesPreemptibleInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrationDockerSwarmInput`<sup>Optional</sup> <a name="integrationDockerSwarmInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationDockerSwarmInput"></a>

```java
public ElastigroupGcpIntegrationDockerSwarm getIntegrationDockerSwarmInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

---

##### `integrationGkeInput`<sup>Optional</sup> <a name="integrationGkeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.integrationGkeInput"></a>

```java
public ElastigroupGcpIntegrationGke getIntegrationGkeInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

---

##### `ipForwardingInput`<sup>Optional</sup> <a name="ipForwardingInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwardingInput"></a>

```java
public java.lang.Object getIpForwardingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.metadataInput"></a>

```java
public java.lang.Object getMetadataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>>

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>>

---

##### `ondemandCountInput`<sup>Optional</sup> <a name="ondemandCountInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCountInput"></a>

```java
public java.lang.Number getOndemandCountInput();
```

- *Type:* java.lang.Number

---

##### `preemptiblePercentageInput`<sup>Optional</sup> <a name="preemptiblePercentageInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentageInput"></a>

```java
public java.lang.Number getPreemptiblePercentageInput();
```

- *Type:* java.lang.Number

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModelInput"></a>

```java
public java.lang.String getProvisioningModelInput();
```

- *Type:* java.lang.String

---

##### `scalingDownPolicyInput`<sup>Optional</sup> <a name="scalingDownPolicyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingDownPolicyInput"></a>

```java
public java.lang.Object getScalingDownPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>>

---

##### `scalingUpPolicyInput`<sup>Optional</sup> <a name="scalingUpPolicyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scalingUpPolicyInput"></a>

```java
public java.lang.Object getScalingUpPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>>

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.scheduledTaskInput"></a>

```java
public java.lang.Object getScheduledTaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `shutdownScriptInput`<sup>Optional</sup> <a name="shutdownScriptInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScriptInput"></a>

```java
public java.lang.String getShutdownScriptInput();
```

- *Type:* java.lang.String

---

##### `startupScriptInput`<sup>Optional</sup> <a name="startupScriptInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScriptInput"></a>

```java
public java.lang.String getStartupScriptInput();
```

- *Type:* java.lang.String

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.subnetsInput"></a>

```java
public java.lang.Object getSubnetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unhealthyDurationInput`<sup>Optional</sup> <a name="unhealthyDurationInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDurationInput"></a>

```java
public java.lang.Number getUnhealthyDurationInput();
```

- *Type:* java.lang.Number

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckGracePeriod`<sup>Required</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckGracePeriod"></a>

```java
public java.lang.Number getHealthCheckGracePeriod();
```

- *Type:* java.lang.Number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceNamePrefix`<sup>Required</sup> <a name="instanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceNamePrefix"></a>

```java
public java.lang.String getInstanceNamePrefix();
```

- *Type:* java.lang.String

---

##### `instanceTypesOndemand`<sup>Required</sup> <a name="instanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesOndemand"></a>

```java
public java.lang.String getInstanceTypesOndemand();
```

- *Type:* java.lang.String

---

##### `instanceTypesPreemptible`<sup>Required</sup> <a name="instanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.instanceTypesPreemptible"></a>

```java
public java.util.List<java.lang.String> getInstanceTypesPreemptible();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipForwarding`<sup>Required</sup> <a name="ipForwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ipForwarding"></a>

```java
public java.lang.Object getIpForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ondemandCount`<sup>Required</sup> <a name="ondemandCount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.ondemandCount"></a>

```java
public java.lang.Number getOndemandCount();
```

- *Type:* java.lang.Number

---

##### `preemptiblePercentage`<sup>Required</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.preemptiblePercentage"></a>

```java
public java.lang.Number getPreemptiblePercentage();
```

- *Type:* java.lang.Number

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `shutdownScript`<sup>Required</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.shutdownScript"></a>

```java
public java.lang.String getShutdownScript();
```

- *Type:* java.lang.String

---

##### `startupScript`<sup>Required</sup> <a name="startupScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.startupScript"></a>

```java
public java.lang.String getStartupScript();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unhealthyDuration`<sup>Required</sup> <a name="unhealthyDuration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.unhealthyDuration"></a>

```java
public java.lang.Number getUnhealthyDuration();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupGcpBackendServices <a name="ElastigroupGcpBackendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpBackendServices;

ElastigroupGcpBackendServices.builder()
    .serviceName(java.lang.String)
//  .locationType(java.lang.String)
//  .namedPorts(IResolvable)
//  .namedPorts(java.util.List<ElastigroupGcpBackendServicesNamedPorts>)
//  .scheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#service_name ElastigroupGcp#service_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#location_type ElastigroupGcp#location_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.namedPorts">namedPorts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>></code> | named_ports block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#scheme ElastigroupGcp#scheme}. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#service_name ElastigroupGcp#service_name}.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#location_type ElastigroupGcp#location_type}.

---

##### `namedPorts`<sup>Optional</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.namedPorts"></a>

```java
public java.lang.Object getNamedPorts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>>

named_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#named_ports ElastigroupGcp#named_ports}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#scheme ElastigroupGcp#scheme}.

---

### ElastigroupGcpBackendServicesNamedPorts <a name="ElastigroupGcpBackendServicesNamedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpBackendServicesNamedPorts;

ElastigroupGcpBackendServicesNamedPorts.builder()
    .name(java.lang.String)
    .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ports ElastigroupGcp#ports}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ports ElastigroupGcp#ports}.

---

### ElastigroupGcpConfig <a name="ElastigroupGcpConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpConfig;

ElastigroupGcpConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .desiredCapacity(java.lang.Number)
    .name(java.lang.String)
//  .autoHealing(java.lang.Boolean)
//  .autoHealing(IResolvable)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .backendServices(IResolvable)
//  .backendServices(java.util.List<ElastigroupGcpBackendServices>)
//  .description(java.lang.String)
//  .disk(IResolvable)
//  .disk(java.util.List<ElastigroupGcpDisk>)
//  .drainingTimeout(java.lang.Number)
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .gpu(IResolvable)
//  .gpu(java.util.List<ElastigroupGcpGpu>)
//  .healthCheckGracePeriod(java.lang.Number)
//  .healthCheckType(java.lang.String)
//  .id(java.lang.String)
//  .instanceNamePrefix(java.lang.String)
//  .instanceTypesCustom(IResolvable)
//  .instanceTypesCustom(java.util.List<ElastigroupGcpInstanceTypesCustom>)
//  .instanceTypesOndemand(java.lang.String)
//  .instanceTypesPreemptible(java.util.List<java.lang.String>)
//  .integrationDockerSwarm(ElastigroupGcpIntegrationDockerSwarm)
//  .integrationGke(ElastigroupGcpIntegrationGke)
//  .ipForwarding(java.lang.Boolean)
//  .ipForwarding(IResolvable)
//  .labels(IResolvable)
//  .labels(java.util.List<ElastigroupGcpLabels>)
//  .maxSize(java.lang.Number)
//  .metadata(IResolvable)
//  .metadata(java.util.List<ElastigroupGcpMetadata>)
//  .minSize(java.lang.Number)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<ElastigroupGcpNetworkInterface>)
//  .ondemandCount(java.lang.Number)
//  .preemptiblePercentage(java.lang.Number)
//  .provisioningModel(java.lang.String)
//  .scalingDownPolicy(IResolvable)
//  .scalingDownPolicy(java.util.List<ElastigroupGcpScalingDownPolicy>)
//  .scalingUpPolicy(IResolvable)
//  .scalingUpPolicy(java.util.List<ElastigroupGcpScalingUpPolicy>)
//  .scheduledTask(IResolvable)
//  .scheduledTask(java.util.List<ElastigroupGcpScheduledTask>)
//  .serviceAccount(java.lang.String)
//  .shutdownScript(java.lang.String)
//  .startupScript(java.lang.String)
//  .subnets(IResolvable)
//  .subnets(java.util.List<ElastigroupGcpSubnets>)
//  .tags(java.util.List<java.lang.String>)
//  .unhealthyDuration(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.autoHealing">autoHealing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.backendServices">backendServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>></code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#description ElastigroupGcp#description}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.gpu">gpu</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>></code> | gpu block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckType">healthCheckType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#id ElastigroupGcp#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceNamePrefix">instanceNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesCustom">instanceTypesCustom</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>></code> | instance_types_custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesOndemand">instanceTypesOndemand</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesPreemptible">instanceTypesPreemptible</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationDockerSwarm">integrationDockerSwarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | integration_docker_swarm block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationGke">integrationGke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | integration_gke block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ipForwarding">ipForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#max_size ElastigroupGcp#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>></code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#min_size ElastigroupGcp#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ondemandCount">ondemandCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingDownPolicy">scalingDownPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>></code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingUpPolicy">scalingUpPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>></code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scheduledTask">scheduledTask</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#service_account ElastigroupGcp#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.shutdownScript">shutdownScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.startupScript">startupScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.subnets">subnets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>></code> | subnets block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#tags ElastigroupGcp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.unhealthyDuration">unhealthyDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#desired_capacity ElastigroupGcp#desired_capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.autoHealing"></a>

```java
public java.lang.Object getAutoHealing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#auto_healing ElastigroupGcp#auto_healing}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#availability_zones ElastigroupGcp#availability_zones}.

---

##### `backendServices`<sup>Optional</sup> <a name="backendServices" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.backendServices"></a>

```java
public java.lang.Object getBackendServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>>

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#backend_services ElastigroupGcp#backend_services}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#description ElastigroupGcp#description}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.disk"></a>

```java
public java.lang.Object getDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#disk ElastigroupGcp#disk}

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#draining_timeout ElastigroupGcp#draining_timeout}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#fallback_to_ondemand ElastigroupGcp#fallback_to_ondemand}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.gpu"></a>

```java
public java.lang.Object getGpu();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>>

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#gpu ElastigroupGcp#gpu}

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckGracePeriod"></a>

```java
public java.lang.Number getHealthCheckGracePeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#health_check_grace_period ElastigroupGcp#health_check_grace_period}.

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.healthCheckType"></a>

```java
public java.lang.String getHealthCheckType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#health_check_type ElastigroupGcp#health_check_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#id ElastigroupGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceNamePrefix`<sup>Optional</sup> <a name="instanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceNamePrefix"></a>

```java
public java.lang.String getInstanceNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_name_prefix ElastigroupGcp#instance_name_prefix}.

---

##### `instanceTypesCustom`<sup>Optional</sup> <a name="instanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesCustom"></a>

```java
public java.lang.Object getInstanceTypesCustom();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>>

instance_types_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_custom ElastigroupGcp#instance_types_custom}

---

##### `instanceTypesOndemand`<sup>Optional</sup> <a name="instanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesOndemand"></a>

```java
public java.lang.String getInstanceTypesOndemand();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_ondemand ElastigroupGcp#instance_types_ondemand}.

---

##### `instanceTypesPreemptible`<sup>Optional</sup> <a name="instanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.instanceTypesPreemptible"></a>

```java
public java.util.List<java.lang.String> getInstanceTypesPreemptible();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#instance_types_preemptible ElastigroupGcp#instance_types_preemptible}.

---

##### `integrationDockerSwarm`<sup>Optional</sup> <a name="integrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationDockerSwarm"></a>

```java
public ElastigroupGcpIntegrationDockerSwarm getIntegrationDockerSwarm();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

integration_docker_swarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#integration_docker_swarm ElastigroupGcp#integration_docker_swarm}

---

##### `integrationGke`<sup>Optional</sup> <a name="integrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.integrationGke"></a>

```java
public ElastigroupGcpIntegrationGke getIntegrationGke();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

integration_gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#integration_gke ElastigroupGcp#integration_gke}

---

##### `ipForwarding`<sup>Optional</sup> <a name="ipForwarding" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ipForwarding"></a>

```java
public java.lang.Object getIpForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ip_forwarding ElastigroupGcp#ip_forwarding}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#labels ElastigroupGcp#labels}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#max_size ElastigroupGcp#max_size}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.metadata"></a>

```java
public java.lang.Object getMetadata();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#metadata ElastigroupGcp#metadata}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#min_size ElastigroupGcp#min_size}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#network_interface ElastigroupGcp#network_interface}

---

##### `ondemandCount`<sup>Optional</sup> <a name="ondemandCount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.ondemandCount"></a>

```java
public java.lang.Number getOndemandCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ondemand_count ElastigroupGcp#ondemand_count}.

---

##### `preemptiblePercentage`<sup>Optional</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.preemptiblePercentage"></a>

```java
public java.lang.Number getPreemptiblePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#preemptible_percentage ElastigroupGcp#preemptible_percentage}.

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#provisioning_model ElastigroupGcp#provisioning_model}.

---

##### `scalingDownPolicy`<sup>Optional</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingDownPolicy"></a>

```java
public java.lang.Object getScalingDownPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>>

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#scaling_down_policy ElastigroupGcp#scaling_down_policy}

---

##### `scalingUpPolicy`<sup>Optional</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scalingUpPolicy"></a>

```java
public java.lang.Object getScalingUpPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>>

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#scaling_up_policy ElastigroupGcp#scaling_up_policy}

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.scheduledTask"></a>

```java
public java.lang.Object getScheduledTask();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#scheduled_task ElastigroupGcp#scheduled_task}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#service_account ElastigroupGcp#service_account}.

---

##### `shutdownScript`<sup>Optional</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.shutdownScript"></a>

```java
public java.lang.String getShutdownScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#shutdown_script ElastigroupGcp#shutdown_script}.

---

##### `startupScript`<sup>Optional</sup> <a name="startupScript" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.startupScript"></a>

```java
public java.lang.String getStartupScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#startup_script ElastigroupGcp#startup_script}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.subnets"></a>

```java
public java.lang.Object getSubnets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>>

subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#subnets ElastigroupGcp#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#tags ElastigroupGcp#tags}.

---

##### `unhealthyDuration`<sup>Optional</sup> <a name="unhealthyDuration" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpConfig.property.unhealthyDuration"></a>

```java
public java.lang.Number getUnhealthyDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#unhealthy_duration ElastigroupGcp#unhealthy_duration}.

---

### ElastigroupGcpDisk <a name="ElastigroupGcpDisk" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpDisk;

ElastigroupGcpDisk.builder()
//  .autoDelete(java.lang.Boolean)
//  .autoDelete(IResolvable)
//  .boot(java.lang.Boolean)
//  .boot(IResolvable)
//  .deviceName(java.lang.String)
//  .initializeParams(IResolvable)
//  .initializeParams(java.util.List<ElastigroupGcpDiskInitializeParams>)
//  .interface(java.lang.String)
//  .mode(java.lang.String)
//  .source(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.autoDelete">autoDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#auto_delete ElastigroupGcp#auto_delete}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.boot">boot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#boot ElastigroupGcp#boot}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#device_name ElastigroupGcp#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.initializeParams">initializeParams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.interface">interface</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#interface ElastigroupGcp#interface}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#mode ElastigroupGcp#mode}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.autoDelete"></a>

```java
public java.lang.Object getAutoDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#auto_delete ElastigroupGcp#auto_delete}.

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.boot"></a>

```java
public java.lang.Object getBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#boot ElastigroupGcp#boot}.

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#device_name ElastigroupGcp#device_name}.

---

##### `initializeParams`<sup>Optional</sup> <a name="initializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.initializeParams"></a>

```java
public java.lang.Object getInitializeParams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#initialize_params ElastigroupGcp#initialize_params}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#interface ElastigroupGcp#interface}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#mode ElastigroupGcp#mode}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpDiskInitializeParams <a name="ElastigroupGcpDiskInitializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpDiskInitializeParams;

ElastigroupGcpDiskInitializeParams.builder()
    .sourceImage(java.lang.String)
//  .diskSizeGb(java.lang.String)
//  .diskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#source_image ElastigroupGcp#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#disk_size_gb ElastigroupGcp#disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#disk_type ElastigroupGcp#disk_type}. |

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#source_image ElastigroupGcp#source_image}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#disk_size_gb ElastigroupGcp#disk_size_gb}.

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#disk_type ElastigroupGcp#disk_type}.

---

### ElastigroupGcpGpu <a name="ElastigroupGcpGpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpGpu;

ElastigroupGcpGpu.builder()
    .count(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#count ElastigroupGcp#count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#count ElastigroupGcp#count}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpInstanceTypesCustom <a name="ElastigroupGcpInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpInstanceTypesCustom;

ElastigroupGcpInstanceTypesCustom.builder()
    .memoryGib(java.lang.Number)
    .vcpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.memoryGib">memoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#memory_gib ElastigroupGcp#memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.vcpu">vcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#vcpu ElastigroupGcp#vcpu}. |

---

##### `memoryGib`<sup>Required</sup> <a name="memoryGib" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.memoryGib"></a>

```java
public java.lang.Number getMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#memory_gib ElastigroupGcp#memory_gib}.

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom.property.vcpu"></a>

```java
public java.lang.Number getVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#vcpu ElastigroupGcp#vcpu}.

---

### ElastigroupGcpIntegrationDockerSwarm <a name="ElastigroupGcpIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationDockerSwarm;

ElastigroupGcpIntegrationDockerSwarm.builder()
    .masterHost(java.lang.String)
    .masterPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterHost">masterHost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#master_host ElastigroupGcp#master_host}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterPort">masterPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#master_port ElastigroupGcp#master_port}. |

---

##### `masterHost`<sup>Required</sup> <a name="masterHost" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterHost"></a>

```java
public java.lang.String getMasterHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#master_host ElastigroupGcp#master_host}.

---

##### `masterPort`<sup>Required</sup> <a name="masterPort" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm.property.masterPort"></a>

```java
public java.lang.Number getMasterPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#master_port ElastigroupGcp#master_port}.

---

### ElastigroupGcpIntegrationGke <a name="ElastigroupGcpIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGke;

ElastigroupGcpIntegrationGke.builder()
//  .autoscaleCooldown(java.lang.Number)
//  .autoscaleDown(ElastigroupGcpIntegrationGkeAutoscaleDown)
//  .autoscaleHeadroom(ElastigroupGcpIntegrationGkeAutoscaleHeadroom)
//  .autoscaleIsAutoConfig(java.lang.Boolean)
//  .autoscaleIsAutoConfig(IResolvable)
//  .autoscaleIsEnabled(java.lang.Boolean)
//  .autoscaleIsEnabled(IResolvable)
//  .autoscaleLabels(IResolvable)
//  .autoscaleLabels(java.util.List<ElastigroupGcpIntegrationGkeAutoscaleLabels>)
//  .autoUpdate(java.lang.Boolean)
//  .autoUpdate(IResolvable)
//  .clusterId(java.lang.String)
//  .location(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleCooldown">autoscaleCooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_cooldown ElastigroupGcp#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsAutoConfig">autoscaleIsAutoConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_is_auto_config ElastigroupGcp#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_is_enabled ElastigroupGcp#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleLabels">autoscaleLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>></code> | autoscale_labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoUpdate">autoUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#auto_update ElastigroupGcp#auto_update}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cluster_id ElastigroupGcp#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#location ElastigroupGcp#location}. |

---

##### `autoscaleCooldown`<sup>Optional</sup> <a name="autoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleCooldown"></a>

```java
public java.lang.Number getAutoscaleCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_cooldown ElastigroupGcp#autoscale_cooldown}.

---

##### `autoscaleDown`<sup>Optional</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleDown"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleDown getAutoscaleDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_down ElastigroupGcp#autoscale_down}

---

##### `autoscaleHeadroom`<sup>Optional</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleHeadroom"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleHeadroom getAutoscaleHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_headroom ElastigroupGcp#autoscale_headroom}

---

##### `autoscaleIsAutoConfig`<sup>Optional</sup> <a name="autoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsAutoConfig"></a>

```java
public java.lang.Object getAutoscaleIsAutoConfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_is_auto_config ElastigroupGcp#autoscale_is_auto_config}.

---

##### `autoscaleIsEnabled`<sup>Optional</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleIsEnabled"></a>

```java
public java.lang.Object getAutoscaleIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_is_enabled ElastigroupGcp#autoscale_is_enabled}.

---

##### `autoscaleLabels`<sup>Optional</sup> <a name="autoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoscaleLabels"></a>

```java
public java.lang.Object getAutoscaleLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>>

autoscale_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#autoscale_labels ElastigroupGcp#autoscale_labels}

---

##### `autoUpdate`<sup>Optional</sup> <a name="autoUpdate" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.autoUpdate"></a>

```java
public java.lang.Object getAutoUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#auto_update ElastigroupGcp#auto_update}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cluster_id ElastigroupGcp#cluster_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#location ElastigroupGcp#location}.

---

### ElastigroupGcpIntegrationGkeAutoscaleDown <a name="ElastigroupGcpIntegrationGkeAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGkeAutoscaleDown;

ElastigroupGcpIntegrationGkeAutoscaleDown.builder()
//  .evaluationPeriods(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

### ElastigroupGcpIntegrationGkeAutoscaleHeadroom <a name="ElastigroupGcpIntegrationGkeAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom;

ElastigroupGcpIntegrationGkeAutoscaleHeadroom.builder()
//  .cpuPerUnit(java.lang.Number)
//  .memoryPerUnit(java.lang.Number)
//  .numOfUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cpu_per_unit ElastigroupGcp#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#memory_per_unit ElastigroupGcp#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#num_of_units ElastigroupGcp#num_of_units}. |

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cpu_per_unit ElastigroupGcp#cpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#memory_per_unit ElastigroupGcp#memory_per_unit}.

---

##### `numOfUnits`<sup>Optional</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#num_of_units ElastigroupGcp#num_of_units}.

---

### ElastigroupGcpIntegrationGkeAutoscaleLabels <a name="ElastigroupGcpIntegrationGkeAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGkeAutoscaleLabels;

ElastigroupGcpIntegrationGkeAutoscaleLabels.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpLabels <a name="ElastigroupGcpLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpLabels;

ElastigroupGcpLabels.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpMetadata <a name="ElastigroupGcpMetadata" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpMetadata;

ElastigroupGcpMetadata.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#key ElastigroupGcp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpNetworkInterface <a name="ElastigroupGcpNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterface;

ElastigroupGcpNetworkInterface.builder()
    .network(java.lang.String)
//  .accessConfigs(IResolvable)
//  .accessConfigs(java.util.List<ElastigroupGcpNetworkInterfaceAccessConfigs>)
//  .aliasIpRanges(IResolvable)
//  .aliasIpRanges(java.util.List<ElastigroupGcpNetworkInterfaceAliasIpRanges>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.network">network</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#network ElastigroupGcp#network}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.accessConfigs">accessConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>></code> | access_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.aliasIpRanges">aliasIpRanges</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>></code> | alias_ip_ranges block. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#network ElastigroupGcp#network}.

---

##### `accessConfigs`<sup>Optional</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.accessConfigs"></a>

```java
public java.lang.Object getAccessConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>>

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#access_configs ElastigroupGcp#access_configs}

---

##### `aliasIpRanges`<sup>Optional</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface.property.aliasIpRanges"></a>

```java
public java.lang.Object getAliasIpRanges();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>>

alias_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#alias_ip_ranges ElastigroupGcp#alias_ip_ranges}

---

### ElastigroupGcpNetworkInterfaceAccessConfigs <a name="ElastigroupGcpNetworkInterfaceAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterfaceAccessConfigs;

ElastigroupGcpNetworkInterfaceAccessConfigs.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#type ElastigroupGcp#type}.

---

### ElastigroupGcpNetworkInterfaceAliasIpRanges <a name="ElastigroupGcpNetworkInterfaceAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterfaceAliasIpRanges;

ElastigroupGcpNetworkInterfaceAliasIpRanges.builder()
    .ipCidrRange(java.lang.String)
    .subnetworkRangeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ip_cidr_range ElastigroupGcp#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#subnetwork_range_name ElastigroupGcp#subnetwork_range_name}. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#ip_cidr_range ElastigroupGcp#ip_cidr_range}.

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#subnetwork_range_name ElastigroupGcp#subnetwork_range_name}.

---

### ElastigroupGcpScalingDownPolicy <a name="ElastigroupGcpScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingDownPolicy;

ElastigroupGcpScalingDownPolicy.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .policyName(java.lang.String)
    .threshold(java.lang.Number)
    .unit(java.lang.String)
//  .actionType(java.lang.String)
//  .adjustment(java.lang.Number)
//  .cooldown(java.lang.Number)
//  .dimensions(IResolvable)
//  .dimensions(java.util.List<ElastigroupGcpScalingDownPolicyDimensions>)
//  .evaluationPeriods(java.lang.Number)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .source(java.lang.String)
//  .statistic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#namespace ElastigroupGcp#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#threshold ElastigroupGcp#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#unit ElastigroupGcp#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#action_type ElastigroupGcp#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>></code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#operator ElastigroupGcp#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#period ElastigroupGcp#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#statistic ElastigroupGcp#statistic}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#namespace ElastigroupGcp#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#threshold ElastigroupGcp#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#unit ElastigroupGcp#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#action_type ElastigroupGcp#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.adjustment"></a>

```java
public java.lang.Number getAdjustment();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.dimensions"></a>

```java
public java.lang.Object getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#dimensions ElastigroupGcp#dimensions}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#operator ElastigroupGcp#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#period ElastigroupGcp#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#statistic ElastigroupGcp#statistic}.

---

### ElastigroupGcpScalingDownPolicyDimensions <a name="ElastigroupGcpScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingDownPolicyDimensions;

ElastigroupGcpScalingDownPolicyDimensions.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpScalingUpPolicy <a name="ElastigroupGcpScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingUpPolicy;

ElastigroupGcpScalingUpPolicy.builder()
    .metricName(java.lang.String)
    .namespace(java.lang.String)
    .policyName(java.lang.String)
    .threshold(java.lang.Number)
    .unit(java.lang.String)
//  .actionType(java.lang.String)
//  .adjustment(java.lang.Number)
//  .cooldown(java.lang.Number)
//  .dimensions(IResolvable)
//  .dimensions(java.util.List<ElastigroupGcpScalingUpPolicyDimensions>)
//  .evaluationPeriods(java.lang.Number)
//  .operator(java.lang.String)
//  .period(java.lang.Number)
//  .source(java.lang.String)
//  .statistic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#namespace ElastigroupGcp#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#threshold ElastigroupGcp#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#unit ElastigroupGcp#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#action_type ElastigroupGcp#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>></code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#operator ElastigroupGcp#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#period ElastigroupGcp#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.statistic">statistic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#statistic ElastigroupGcp#statistic}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#metric_name ElastigroupGcp#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#namespace ElastigroupGcp#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#policy_name ElastigroupGcp#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#threshold ElastigroupGcp#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#unit ElastigroupGcp#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#action_type ElastigroupGcp#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.adjustment"></a>

```java
public java.lang.Number getAdjustment();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#adjustment ElastigroupGcp#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cooldown ElastigroupGcp#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.dimensions"></a>

```java
public java.lang.Object getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#dimensions ElastigroupGcp#dimensions}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#evaluation_periods ElastigroupGcp#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#operator ElastigroupGcp#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#period ElastigroupGcp#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#source ElastigroupGcp#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#statistic ElastigroupGcp#statistic}.

---

### ElastigroupGcpScalingUpPolicyDimensions <a name="ElastigroupGcpScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingUpPolicyDimensions;

ElastigroupGcpScalingUpPolicyDimensions.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#name ElastigroupGcp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#value ElastigroupGcp#value}.

---

### ElastigroupGcpScheduledTask <a name="ElastigroupGcpScheduledTask" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScheduledTask;

ElastigroupGcpScheduledTask.builder()
    .taskType(java.lang.String)
//  .cronExpression(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .maxCapacity(java.lang.String)
//  .minCapacity(java.lang.String)
//  .targetCapacity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.taskType">taskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#task_type ElastigroupGcp#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cron_expression ElastigroupGcp#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#is_enabled ElastigroupGcp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#max_capacity ElastigroupGcp#max_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.minCapacity">minCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#min_capacity ElastigroupGcp#min_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.targetCapacity">targetCapacity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#target_capacity ElastigroupGcp#target_capacity}. |

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#task_type ElastigroupGcp#task_type}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#cron_expression ElastigroupGcp#cron_expression}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#is_enabled ElastigroupGcp#is_enabled}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.maxCapacity"></a>

```java
public java.lang.String getMaxCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#max_capacity ElastigroupGcp#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.minCapacity"></a>

```java
public java.lang.String getMinCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#min_capacity ElastigroupGcp#min_capacity}.

---

##### `targetCapacity`<sup>Optional</sup> <a name="targetCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask.property.targetCapacity"></a>

```java
public java.lang.String getTargetCapacity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#target_capacity ElastigroupGcp#target_capacity}.

---

### ElastigroupGcpSubnets <a name="ElastigroupGcpSubnets" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpSubnets;

ElastigroupGcpSubnets.builder()
    .region(java.lang.String)
    .subnetNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#region ElastigroupGcp#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.subnetNames">subnetNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#subnet_names ElastigroupGcp#subnet_names}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#region ElastigroupGcp#region}.

---

##### `subnetNames`<sup>Required</sup> <a name="subnetNames" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets.property.subnetNames"></a>

```java
public java.util.List<java.lang.String> getSubnetNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/elastigroup_gcp#subnet_names ElastigroupGcp#subnet_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupGcpBackendServicesList <a name="ElastigroupGcpBackendServicesList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpBackendServicesList;

new ElastigroupGcpBackendServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get"></a>

```java
public ElastigroupGcpBackendServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>>

---


### ElastigroupGcpBackendServicesNamedPortsList <a name="ElastigroupGcpBackendServicesNamedPortsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpBackendServicesNamedPortsList;

new ElastigroupGcpBackendServicesNamedPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get"></a>

```java
public ElastigroupGcpBackendServicesNamedPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>>

---


### ElastigroupGcpBackendServicesNamedPortsOutputReference <a name="ElastigroupGcpBackendServicesNamedPortsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpBackendServicesNamedPortsOutputReference;

new ElastigroupGcpBackendServicesNamedPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>

---


### ElastigroupGcpBackendServicesOutputReference <a name="ElastigroupGcpBackendServicesOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpBackendServicesOutputReference;

new ElastigroupGcpBackendServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts">putNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetLocationType">resetLocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetNamedPorts">resetNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamedPorts` <a name="putNamedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts"></a>

```java
public void putNamedPorts(IResolvable OR java.util.List<ElastigroupGcpBackendServicesNamedPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.putNamedPorts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>>

---

##### `resetLocationType` <a name="resetLocationType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetLocationType"></a>

```java
public void resetLocationType()
```

##### `resetNamedPorts` <a name="resetNamedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetNamedPorts"></a>

```java
public void resetNamedPorts()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.resetScheme"></a>

```java
public void resetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPorts">namedPorts</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList">ElastigroupGcpBackendServicesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPortsInput">namedPortsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namedPorts`<sup>Required</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPorts"></a>

```java
public ElastigroupGcpBackendServicesNamedPortsList getNamedPorts();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPortsList">ElastigroupGcpBackendServicesNamedPortsList</a>

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `namedPortsInput`<sup>Optional</sup> <a name="namedPortsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.namedPortsInput"></a>

```java
public java.lang.Object getNamedPortsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesNamedPorts">ElastigroupGcpBackendServicesNamedPorts</a>>

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpBackendServices">ElastigroupGcpBackendServices</a>

---


### ElastigroupGcpDiskInitializeParamsList <a name="ElastigroupGcpDiskInitializeParamsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpDiskInitializeParamsList;

new ElastigroupGcpDiskInitializeParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get"></a>

```java
public ElastigroupGcpDiskInitializeParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>>

---


### ElastigroupGcpDiskInitializeParamsOutputReference <a name="ElastigroupGcpDiskInitializeParamsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpDiskInitializeParamsOutputReference;

new ElastigroupGcpDiskInitializeParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImageInput">sourceImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.String getDiskSizeGbInput();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImageInput"></a>

```java
public java.lang.String getSourceImageInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>

---


### ElastigroupGcpDiskList <a name="ElastigroupGcpDiskList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpDiskList;

new ElastigroupGcpDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get"></a>

```java
public ElastigroupGcpDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>>

---


### ElastigroupGcpDiskOutputReference <a name="ElastigroupGcpDiskOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpDiskOutputReference;

new ElastigroupGcpDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams">putInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetBoot">resetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInitializeParams">resetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInitializeParams` <a name="putInitializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams"></a>

```java
public void putInitializeParams(IResolvable OR java.util.List<ElastigroupGcpDiskInitializeParams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetAutoDelete"></a>

```java
public void resetAutoDelete()
```

##### `resetBoot` <a name="resetBoot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetBoot"></a>

```java
public void resetBoot()
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetInitializeParams` <a name="resetInitializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInitializeParams"></a>

```java
public void resetInitializeParams()
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetInterface"></a>

```java
public void resetInterface()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParams">initializeParams</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList">ElastigroupGcpDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.bootInput">bootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParamsInput">initializeParamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.boot">boot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initializeParams`<sup>Required</sup> <a name="initializeParams" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParams"></a>

```java
public ElastigroupGcpDiskInitializeParamsList getInitializeParams();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParamsList">ElastigroupGcpDiskInitializeParamsList</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDeleteInput"></a>

```java
public java.lang.Object getAutoDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bootInput`<sup>Optional</sup> <a name="bootInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.bootInput"></a>

```java
public java.lang.Object getBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `initializeParamsInput`<sup>Optional</sup> <a name="initializeParamsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.initializeParamsInput"></a>

```java
public java.lang.Object getInitializeParamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskInitializeParams">ElastigroupGcpDiskInitializeParams</a>>

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.autoDelete"></a>

```java
public java.lang.Object getAutoDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.boot"></a>

```java
public java.lang.Object getBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpDisk">ElastigroupGcpDisk</a>

---


### ElastigroupGcpGpuList <a name="ElastigroupGcpGpuList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpGpuList;

new ElastigroupGcpGpuList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get"></a>

```java
public ElastigroupGcpGpuOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>>

---


### ElastigroupGcpGpuOutputReference <a name="ElastigroupGcpGpuOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpGpuOutputReference;

new ElastigroupGcpGpuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpuOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpGpu">ElastigroupGcpGpu</a>

---


### ElastigroupGcpInstanceTypesCustomList <a name="ElastigroupGcpInstanceTypesCustomList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpInstanceTypesCustomList;

new ElastigroupGcpInstanceTypesCustomList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get"></a>

```java
public ElastigroupGcpInstanceTypesCustomOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>>

---


### ElastigroupGcpInstanceTypesCustomOutputReference <a name="ElastigroupGcpInstanceTypesCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpInstanceTypesCustomOutputReference;

new ElastigroupGcpInstanceTypesCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGibInput">memoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpuInput">vcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGib">memoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpu">vcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryGibInput`<sup>Optional</sup> <a name="memoryGibInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGibInput"></a>

```java
public java.lang.Number getMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `vcpuInput`<sup>Optional</sup> <a name="vcpuInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpuInput"></a>

```java
public java.lang.Number getVcpuInput();
```

- *Type:* java.lang.Number

---

##### `memoryGib`<sup>Required</sup> <a name="memoryGib" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.memoryGib"></a>

```java
public java.lang.Number getMemoryGib();
```

- *Type:* java.lang.Number

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.vcpu"></a>

```java
public java.lang.Number getVcpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustomOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpInstanceTypesCustom">ElastigroupGcpInstanceTypesCustom</a>

---


### ElastigroupGcpIntegrationDockerSwarmOutputReference <a name="ElastigroupGcpIntegrationDockerSwarmOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationDockerSwarmOutputReference;

new ElastigroupGcpIntegrationDockerSwarmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHostInput">masterHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPortInput">masterPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHost">masterHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPort">masterPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `masterHostInput`<sup>Optional</sup> <a name="masterHostInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHostInput"></a>

```java
public java.lang.String getMasterHostInput();
```

- *Type:* java.lang.String

---

##### `masterPortInput`<sup>Optional</sup> <a name="masterPortInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPortInput"></a>

```java
public java.lang.Number getMasterPortInput();
```

- *Type:* java.lang.Number

---

##### `masterHost`<sup>Required</sup> <a name="masterHost" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterHost"></a>

```java
public java.lang.String getMasterHost();
```

- *Type:* java.lang.String

---

##### `masterPort`<sup>Required</sup> <a name="masterPort" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.masterPort"></a>

```java
public java.lang.Number getMasterPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarmOutputReference.property.internalValue"></a>

```java
public ElastigroupGcpIntegrationDockerSwarm getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationDockerSwarm">ElastigroupGcpIntegrationDockerSwarm</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference;

new ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference.property.internalValue"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleDown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference;

new ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits">resetNumOfUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```java
public void resetCpuPerUnit()
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```java
public void resetMemoryPerUnit()
```

##### `resetNumOfUnits` <a name="resetNumOfUnits" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```java
public void resetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```java
public java.lang.Number getCpuPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```java
public java.lang.Number getMemoryPerUnitInput();
```

- *Type:* java.lang.Number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```java
public java.lang.Number getNumOfUnitsInput();
```

- *Type:* java.lang.Number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```java
public java.lang.Number getCpuPerUnit();
```

- *Type:* java.lang.Number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```java
public java.lang.Number getMemoryPerUnit();
```

- *Type:* java.lang.Number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```java
public java.lang.Number getNumOfUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleHeadroom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

---


### ElastigroupGcpIntegrationGkeAutoscaleLabelsList <a name="ElastigroupGcpIntegrationGkeAutoscaleLabelsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList;

new ElastigroupGcpIntegrationGkeAutoscaleLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>>

---


### ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference <a name="ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference;

new ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>

---


### ElastigroupGcpIntegrationGkeOutputReference <a name="ElastigroupGcpIntegrationGkeOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpIntegrationGkeOutputReference;

new ElastigroupGcpIntegrationGkeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown">putAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom">putAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels">putAutoscaleLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleCooldown">resetAutoscaleCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleDown">resetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleHeadroom">resetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig">resetAutoscaleIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsEnabled">resetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleLabels">resetAutoscaleLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoUpdate">resetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaleDown` <a name="putAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown"></a>

```java
public void putAutoscaleDown(ElastigroupGcpIntegrationGkeAutoscaleDown value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

---

##### `putAutoscaleHeadroom` <a name="putAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom"></a>

```java
public void putAutoscaleHeadroom(ElastigroupGcpIntegrationGkeAutoscaleHeadroom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

---

##### `putAutoscaleLabels` <a name="putAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels"></a>

```java
public void putAutoscaleLabels(IResolvable OR java.util.List<ElastigroupGcpIntegrationGkeAutoscaleLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.putAutoscaleLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>>

---

##### `resetAutoscaleCooldown` <a name="resetAutoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleCooldown"></a>

```java
public void resetAutoscaleCooldown()
```

##### `resetAutoscaleDown` <a name="resetAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleDown"></a>

```java
public void resetAutoscaleDown()
```

##### `resetAutoscaleHeadroom` <a name="resetAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleHeadroom"></a>

```java
public void resetAutoscaleHeadroom()
```

##### `resetAutoscaleIsAutoConfig` <a name="resetAutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig"></a>

```java
public void resetAutoscaleIsAutoConfig()
```

##### `resetAutoscaleIsEnabled` <a name="resetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleIsEnabled"></a>

```java
public void resetAutoscaleIsEnabled()
```

##### `resetAutoscaleLabels` <a name="resetAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoscaleLabels"></a>

```java
public void resetAutoscaleLabels()
```

##### `resetAutoUpdate` <a name="resetAutoUpdate" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetAutoUpdate"></a>

```java
public void resetAutoUpdate()
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.resetLocation"></a>

```java
public void resetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference">ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabels">autoscaleLabels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList">ElastigroupGcpIntegrationGkeAutoscaleLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldownInput">autoscaleCooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDownInput">autoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroomInput">autoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput">autoscaleIsAutoConfigInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabledInput">autoscaleIsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabelsInput">autoscaleLabelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdateInput">autoUpdateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldown">autoscaleCooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfig">autoscaleIsAutoConfig</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdate">autoUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscaleDown`<sup>Required</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDown"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference getAutoscaleDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference">ElastigroupGcpIntegrationGkeAutoscaleDownOutputReference</a>

---

##### `autoscaleHeadroom`<sup>Required</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroom"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference getAutoscaleHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGcpIntegrationGkeAutoscaleHeadroomOutputReference</a>

---

##### `autoscaleLabels`<sup>Required</sup> <a name="autoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabels"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleLabelsList getAutoscaleLabels();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabelsList">ElastigroupGcpIntegrationGkeAutoscaleLabelsList</a>

---

##### `autoscaleCooldownInput`<sup>Optional</sup> <a name="autoscaleCooldownInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldownInput"></a>

```java
public java.lang.Number getAutoscaleCooldownInput();
```

- *Type:* java.lang.Number

---

##### `autoscaleDownInput`<sup>Optional</sup> <a name="autoscaleDownInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleDownInput"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleDown getAutoscaleDownInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleDown">ElastigroupGcpIntegrationGkeAutoscaleDown</a>

---

##### `autoscaleHeadroomInput`<sup>Optional</sup> <a name="autoscaleHeadroomInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleHeadroomInput"></a>

```java
public ElastigroupGcpIntegrationGkeAutoscaleHeadroom getAutoscaleHeadroomInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleHeadroom">ElastigroupGcpIntegrationGkeAutoscaleHeadroom</a>

---

##### `autoscaleIsAutoConfigInput`<sup>Optional</sup> <a name="autoscaleIsAutoConfigInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput"></a>

```java
public java.lang.Object getAutoscaleIsAutoConfigInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoscaleIsEnabledInput`<sup>Optional</sup> <a name="autoscaleIsEnabledInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabledInput"></a>

```java
public java.lang.Object getAutoscaleIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoscaleLabelsInput`<sup>Optional</sup> <a name="autoscaleLabelsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleLabelsInput"></a>

```java
public java.lang.Object getAutoscaleLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeAutoscaleLabels">ElastigroupGcpIntegrationGkeAutoscaleLabels</a>>

---

##### `autoUpdateInput`<sup>Optional</sup> <a name="autoUpdateInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdateInput"></a>

```java
public java.lang.Object getAutoUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `autoscaleCooldown`<sup>Required</sup> <a name="autoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleCooldown"></a>

```java
public java.lang.Number getAutoscaleCooldown();
```

- *Type:* java.lang.Number

---

##### `autoscaleIsAutoConfig`<sup>Required</sup> <a name="autoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsAutoConfig"></a>

```java
public java.lang.Object getAutoscaleIsAutoConfig();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoscaleIsEnabled`<sup>Required</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoscaleIsEnabled"></a>

```java
public java.lang.Object getAutoscaleIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.autoUpdate"></a>

```java
public java.lang.Object getAutoUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGkeOutputReference.property.internalValue"></a>

```java
public ElastigroupGcpIntegrationGke getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpIntegrationGke">ElastigroupGcpIntegrationGke</a>

---


### ElastigroupGcpLabelsList <a name="ElastigroupGcpLabelsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpLabelsList;

new ElastigroupGcpLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get"></a>

```java
public ElastigroupGcpLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>>

---


### ElastigroupGcpLabelsOutputReference <a name="ElastigroupGcpLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpLabelsOutputReference;

new ElastigroupGcpLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpLabels">ElastigroupGcpLabels</a>

---


### ElastigroupGcpMetadataList <a name="ElastigroupGcpMetadataList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpMetadataList;

new ElastigroupGcpMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get"></a>

```java
public ElastigroupGcpMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>>

---


### ElastigroupGcpMetadataOutputReference <a name="ElastigroupGcpMetadataOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpMetadataOutputReference;

new ElastigroupGcpMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpMetadata">ElastigroupGcpMetadata</a>

---


### ElastigroupGcpNetworkInterfaceAccessConfigsList <a name="ElastigroupGcpNetworkInterfaceAccessConfigsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterfaceAccessConfigsList;

new ElastigroupGcpNetworkInterfaceAccessConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get"></a>

```java
public ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>>

---


### ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference <a name="ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference;

new ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>

---


### ElastigroupGcpNetworkInterfaceAliasIpRangesList <a name="ElastigroupGcpNetworkInterfaceAliasIpRangesList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList;

new ElastigroupGcpNetworkInterfaceAliasIpRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get"></a>

```java
public ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>>

---


### ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference <a name="ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference;

new ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput"></a>

```java
public java.lang.String getSubnetworkRangeNameInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>

---


### ElastigroupGcpNetworkInterfaceList <a name="ElastigroupGcpNetworkInterfaceList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterfaceList;

new ElastigroupGcpNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get"></a>

```java
public ElastigroupGcpNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>>

---


### ElastigroupGcpNetworkInterfaceOutputReference <a name="ElastigroupGcpNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpNetworkInterfaceOutputReference;

new ElastigroupGcpNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs">putAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges">putAliasIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAccessConfigs">resetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAliasIpRanges">resetAliasIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfigs` <a name="putAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs"></a>

```java
public void putAccessConfigs(IResolvable OR java.util.List<ElastigroupGcpNetworkInterfaceAccessConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>>

---

##### `putAliasIpRanges` <a name="putAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges"></a>

```java
public void putAliasIpRanges(IResolvable OR java.util.List<ElastigroupGcpNetworkInterfaceAliasIpRanges> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.putAliasIpRanges.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>>

---

##### `resetAccessConfigs` <a name="resetAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAccessConfigs"></a>

```java
public void resetAccessConfigs()
```

##### `resetAliasIpRanges` <a name="resetAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.resetAliasIpRanges"></a>

```java
public void resetAliasIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList">ElastigroupGcpNetworkInterfaceAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRanges">aliasIpRanges</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList">ElastigroupGcpNetworkInterfaceAliasIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigsInput">accessConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRangesInput">aliasIpRangesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigs"></a>

```java
public ElastigroupGcpNetworkInterfaceAccessConfigsList getAccessConfigs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigsList">ElastigroupGcpNetworkInterfaceAccessConfigsList</a>

---

##### `aliasIpRanges`<sup>Required</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRanges"></a>

```java
public ElastigroupGcpNetworkInterfaceAliasIpRangesList getAliasIpRanges();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRangesList">ElastigroupGcpNetworkInterfaceAliasIpRangesList</a>

---

##### `accessConfigsInput`<sup>Optional</sup> <a name="accessConfigsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.accessConfigsInput"></a>

```java
public java.lang.Object getAccessConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAccessConfigs">ElastigroupGcpNetworkInterfaceAccessConfigs</a>>

---

##### `aliasIpRangesInput`<sup>Optional</sup> <a name="aliasIpRangesInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.aliasIpRangesInput"></a>

```java
public java.lang.Object getAliasIpRangesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceAliasIpRanges">ElastigroupGcpNetworkInterfaceAliasIpRanges</a>>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpNetworkInterface">ElastigroupGcpNetworkInterface</a>

---


### ElastigroupGcpScalingDownPolicyDimensionsList <a name="ElastigroupGcpScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingDownPolicyDimensionsList;

new ElastigroupGcpScalingDownPolicyDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get"></a>

```java
public ElastigroupGcpScalingDownPolicyDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>>

---


### ElastigroupGcpScalingDownPolicyDimensionsOutputReference <a name="ElastigroupGcpScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference;

new ElastigroupGcpScalingDownPolicyDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>

---


### ElastigroupGcpScalingDownPolicyList <a name="ElastigroupGcpScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingDownPolicyList;

new ElastigroupGcpScalingDownPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get"></a>

```java
public ElastigroupGcpScalingDownPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>>

---


### ElastigroupGcpScalingDownPolicyOutputReference <a name="ElastigroupGcpScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingDownPolicyOutputReference;

new ElastigroupGcpScalingDownPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable OR java.util.List<ElastigroupGcpScalingDownPolicyDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>>

---

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList">ElastigroupGcpScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensions"></a>

```java
public ElastigroupGcpScalingDownPolicyDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensionsList">ElastigroupGcpScalingDownPolicyDimensionsList</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```java
public java.lang.Number getAdjustmentInput();
```

- *Type:* java.lang.Number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Object getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyDimensions">ElastigroupGcpScalingDownPolicyDimensions</a>>

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.adjustment"></a>

```java
public java.lang.Number getAdjustment();
```

- *Type:* java.lang.Number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingDownPolicy">ElastigroupGcpScalingDownPolicy</a>

---


### ElastigroupGcpScalingUpPolicyDimensionsList <a name="ElastigroupGcpScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingUpPolicyDimensionsList;

new ElastigroupGcpScalingUpPolicyDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get"></a>

```java
public ElastigroupGcpScalingUpPolicyDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>>

---


### ElastigroupGcpScalingUpPolicyDimensionsOutputReference <a name="ElastigroupGcpScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference;

new ElastigroupGcpScalingUpPolicyDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>

---


### ElastigroupGcpScalingUpPolicyList <a name="ElastigroupGcpScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingUpPolicyList;

new ElastigroupGcpScalingUpPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get"></a>

```java
public ElastigroupGcpScalingUpPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>>

---


### ElastigroupGcpScalingUpPolicyOutputReference <a name="ElastigroupGcpScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScalingUpPolicyOutputReference;

new ElastigroupGcpScalingUpPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable OR java.util.List<ElastigroupGcpScalingUpPolicyDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>>

---

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetAdjustment"></a>

```java
public void resetAdjustment()
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetCooldown"></a>

```java
public void resetCooldown()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList">ElastigroupGcpScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensions"></a>

```java
public ElastigroupGcpScalingUpPolicyDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensionsList">ElastigroupGcpScalingUpPolicyDimensionsList</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```java
public java.lang.Number getAdjustmentInput();
```

- *Type:* java.lang.Number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldownInput"></a>

```java
public java.lang.Number getCooldownInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Object getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyDimensions">ElastigroupGcpScalingUpPolicyDimensions</a>>

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.adjustment"></a>

```java
public java.lang.Number getAdjustment();
```

- *Type:* java.lang.Number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.cooldown"></a>

```java
public java.lang.Number getCooldown();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScalingUpPolicy">ElastigroupGcpScalingUpPolicy</a>

---


### ElastigroupGcpScheduledTaskList <a name="ElastigroupGcpScheduledTaskList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScheduledTaskList;

new ElastigroupGcpScheduledTaskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get"></a>

```java
public ElastigroupGcpScheduledTaskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>>

---


### ElastigroupGcpScheduledTaskOutputReference <a name="ElastigroupGcpScheduledTaskOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpScheduledTaskOutputReference;

new ElastigroupGcpScheduledTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetTargetCapacity">resetTargetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetCronExpression"></a>

```java
public void resetCronExpression()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetMinCapacity"></a>

```java
public void resetMinCapacity()
```

##### `resetTargetCapacity` <a name="resetTargetCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.resetTargetCapacity"></a>

```java
public void resetTargetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacityInput">targetCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacity">targetCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.String getMaxCapacityInput();
```

- *Type:* java.lang.String

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacityInput"></a>

```java
public java.lang.String getMinCapacityInput();
```

- *Type:* java.lang.String

---

##### `targetCapacityInput`<sup>Optional</sup> <a name="targetCapacityInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacityInput"></a>

```java
public java.lang.String getTargetCapacityInput();
```

- *Type:* java.lang.String

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskTypeInput"></a>

```java
public java.lang.String getTaskTypeInput();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.maxCapacity"></a>

```java
public java.lang.String getMaxCapacity();
```

- *Type:* java.lang.String

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.minCapacity"></a>

```java
public java.lang.String getMinCapacity();
```

- *Type:* java.lang.String

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.targetCapacity"></a>

```java
public java.lang.String getTargetCapacity();
```

- *Type:* java.lang.String

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpScheduledTask">ElastigroupGcpScheduledTask</a>

---


### ElastigroupGcpSubnetsList <a name="ElastigroupGcpSubnetsList" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpSubnetsList;

new ElastigroupGcpSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get"></a>

```java
public ElastigroupGcpSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>>

---


### ElastigroupGcpSubnetsOutputReference <a name="ElastigroupGcpSubnetsOutputReference" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_gcp.ElastigroupGcpSubnetsOutputReference;

new ElastigroupGcpSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNamesInput">subnetNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNames">subnetNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subnetNamesInput`<sup>Optional</sup> <a name="subnetNamesInput" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNamesInput"></a>

```java
public java.util.List<java.lang.String> getSubnetNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `subnetNames`<sup>Required</sup> <a name="subnetNames" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.subnetNames"></a>

```java
public java.util.List<java.lang.String> getSubnetNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupGcp.ElastigroupGcpSubnets">ElastigroupGcpSubnets</a>

---



